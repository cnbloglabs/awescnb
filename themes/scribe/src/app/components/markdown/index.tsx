/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import './index.css'

interface RichTextProps {
  html: string
  className?: string
}

function wrapTables(html: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  const tables = doc.querySelectorAll('table')
  tables.forEach((table) => {
    const wrapper = doc.createElement('div')
    wrapper.className = 'my-6 w-full overflow-y-auto rounded-lg border'

    if (table.parentNode) {
      table.parentNode.insertBefore(wrapper, table)
      wrapper.appendChild(table)
    }
  })

  return doc.body.innerHTML
}

export function Markdown({ html, className = '' }: RichTextProps) {
  const processedHtml = wrapTables(html)

  return (
    <div
      className={`custom-markdown ${className}`}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  )
}
