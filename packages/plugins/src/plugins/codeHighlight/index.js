import { getCodeHighlightOptions } from '@acnb/options'
import { getCurrentPage, isMd } from '../../utils/cnblog'
import { themes } from './themes.js'

/**
 * 构建 Markdown 代码块高亮
 * @param {*} light
 * @param {*} dark
 */
function buildMarkdownHighlight(light, dark) {
  let style
  if (!isMd()) {
    style = `<style>
        :root{${themes.github}}
        </style>`
  } else {
    style = `<style>
              :root{${themes[light]}}
              :root[theme="dark"]{${themes[dark]}}
            </style>`
  }
  $('head').append(style)
}

export function codeHighlight(_, devOptions) {
  if (getCurrentPage() !== 'post') {
    return
  }
  if ($('pre').length === 0) {
    return
  }

  const { light, dark } = getCodeHighlightOptions(devOptions)
  buildMarkdownHighlight(light, dark)
}
