// 代码高亮
import { highlightConfig } from 'options/plugins'
import { getCurrentPage, isMd } from 'utils/cnblog'
import themes from './themes.js'

/**
 * 构建 Markdown 代码块高亮
 * @param {*} light
 * @param {*} dark
 */
function buildMarkdownHighlight(light, dark) {
    let style
    if (!isMd()) {
        style = `<style>
        :root{${themes['github']}}
        </style>`
    } else {
        style = `<style>
        :root{${themes[light]}}
        :root[theme="dark"]{${themes[dark]}}
        </style>`
    }
    $('head').append(style)
}

/**
 * 调整 TinyMCE 代码块 padding
 */
function AdjustTinyMCEPadding() {
    if (isMd()) return
    $('pre').each(function() {
        const hasLineNumber =
            $(this).find('span[style="color: #008080;"]').length !== 0
        if (!hasLineNumber) {
            $(this).css({
                padding: '10px 14px',
            })
        }
    })
}

export default (theme, devOptions) => {
    if (getCurrentPage() !== 'post') return
    if ($('pre').length === 0) return
    const { light, dark } = highlightConfig(devOptions)
    buildMarkdownHighlight(light, dark)
    AdjustTinyMCEPadding()
}
