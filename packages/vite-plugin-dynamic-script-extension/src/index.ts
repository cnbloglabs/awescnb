import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import type { Plugin } from 'vite'

export interface DynamicScriptExtensionOptions {
  /**
   * Default script source path when neither main.ts nor main.js exists
   * @default '/src/main.js'
   */
  defaultScriptSrc?: string
  /**
   * Base directory to resolve main files from
   * @default process.cwd()
   */
  baseDir?: string
}

/**
 * Vite plugin for dynamic script extension - automatically detects and uses main.ts or main.js files
 */
export default function dynamicScriptExtension(
  options: DynamicScriptExtensionOptions = {},
): Plugin {
  const { defaultScriptSrc = '/src/main.js', baseDir = process.cwd() } = options

  return {
    name: 'vite-plugin-dynamic-script-extension',
    transformIndexHtml(html) {
      // 在开发和构建时，检查 main.js 或 main.ts 是否存在
      const jsPath = path.resolve(baseDir, 'src/main.js')
      const tsPath = path.resolve(baseDir, 'src/main.ts')
      let scriptSrc = defaultScriptSrc // 默认值

      if (fs.existsSync(tsPath)) {
        scriptSrc = '/src/main.ts' // 如果 main.ts 存在，使用它
      } else if (fs.existsSync(jsPath)) {
        scriptSrc = '/src/main.js' // 否则使用 main.js
      }

      // 替换 HTML 中的 <script> 标签 src 属性
      return html.replace(
        /<script type="module" src="[^"]*"><\/script>/,
        `<script type="module" src="${scriptSrc}"></script>`,
      )
    },
  }
}
