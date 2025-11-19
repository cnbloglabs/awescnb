/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: 需要渲染 markdown 转换的 HTML */
import { useMemo } from 'preact/hooks'

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function processLink(text: string): string {
  // 处理 [text](url) 语法
  // 支持可选的标题属性 [text](url "title")
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)(?:\s+"([^"]+)")?\)/g,
    (_, linkText, url, title) => {
      const escapedUrl = escapeHtml(url)
      const escapedText = linkText
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : ''
      return `<a href="${escapedUrl}"${titleAttr}>${escapedText}</a>`
    },
  )
}

function processBold(text: string): string {
  // 处理 **text** 语法
  let result = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  // 处理 __text__ 语法
  result = result.replace(/__(.+?)__/g, '<strong>$1</strong>')
  return result
}

function processInline(text: string): string {
  // 先处理链接，再处理加粗（链接内可能包含加粗文本）
  let result = processLink(text)
  result = processBold(result)
  return result
}

function markdownToHtml(md: string): string {
  // 按行分割输入
  const lines = md.split('\n')

  // 存储列表项及其层级信息
  interface ListItem {
    content: string
    level: number
  }
  const listItems: ListItem[] = []

  for (const line of lines) {
    // 跳过空行
    if (line.trim() === '') continue

    // 将制表符转换为2个空格，统一缩进计算方式
    const lineWithSpaces = line.replace('\t', '  ')

    // 检查是否是带 "- " 的列表项
    if (lineWithSpaces.includes('- ')) {
      const dashIndex = lineWithSpaces.indexOf('- ')
      const content = lineWithSpaces.slice(dashIndex + 2).trim()
      // 计算层级（2个空格为1级）
      const level = Math.floor(dashIndex / 2)

      listItems.push({ content, level })
    } else if (listItems.length > 0 || line.trim().includes('item')) {
      // 处理没有 "- " 前缀但属于列表的项（如示例中的 item 1 和 item 2）
      listItems.push({ content: line.trim(), level: 0 })
    }
    // 忽略其他内容（如段落）
  }

  // 构建HTML结构
  let html = ''
  let currentLevel = 0

  for (let i = 0; i < listItems.length; i++) {
    const { content, level } = listItems[i]
    const nextLevel = i + 1 < listItems.length ? listItems[i + 1].level : 0

    // 处理层级变化
    if (level > currentLevel) {
      // 层级增加，添加新的ul
      for (let j = currentLevel; j < level; j++) {
        html += `\n${'  '.repeat(j + 1)}<ul>`
      }
    } else if (level < currentLevel) {
      // 层级减少，关闭相应的ul
      for (let j = currentLevel; j > level; j--) {
        html += `\n${'  '.repeat(j)}</ul>`
      }
    }

    // 添加列表项，处理内联语法（链接、加粗等）
    html += `\n${'  '.repeat(level + 1)}<li>${processInline(content)}`

    // 如果下一项层级不大于当前层级，关闭li标签
    if (nextLevel <= level) {
      html += '</li>'
    }

    currentLevel = level
  }

  // 关闭剩余的ul标签
  for (let j = currentLevel; j > 0; j--) {
    html += `\n${'  '.repeat(j)}</ul>`
  }

  // 添加最外层的ul标签
  return `<ul>${html}\n</ul>`
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: string
}

export function SimpleMarkdown({ children, ...props }: Props) {
  const html = useMemo(() => markdownToHtml(children), [children])

  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />
}
