// 代码高亮
import { highlightConfig } from '@config/plugins.js'
import { pageName, isMd } from '@tools'
import themes from './themes.js'

function buildMarkdownLinenumber(light, dark, type) {
    let style
    if (type.length && !dark.length && !light.length) {
        style = `<style>:root{${themes[type]}}</style>`
    } else {
        style = `<style>
        :root{${themes[light]}}
        :root[theme="dark"]{${themes[dark]}}
        </style>`
    }
    $('head').append(style)
}

function otherEditorLinenumberPadding() {
    if (isMd()) return
    $('pre').each(function() {
        const hasLineNumber =
            $(this).find('span[style="color: #008080;"]')
                .length !== 0
        if (!hasLineNumber) {
            $(this).css({
                padding: '10px 14px',
            })
        }
    })
}

export default devOptions => {
    if (pageName() !== 'post') return
    if ($('pre').length === 0) return
    const { light, dark, type } = highlightConfig(
        devOptions,
    )
    buildMarkdownLinenumber(light, dark, type)
    otherEditorLinenumberPadding()
}
