// 代码高亮
import { highlightConfig } from '@config/plugins'
import { pageName, isMd } from '@tools'
import themes from './themes.js'

function buildMarkdownLinenumber(light, dark) {
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
    const { light, dark } = highlightConfig(devOptions)
    buildMarkdownLinenumber(light, dark)
    otherEditorLinenumberPadding()
}
