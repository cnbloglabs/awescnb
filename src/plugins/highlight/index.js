// 代码高亮
import { pageName, isMd } from '@/assets/utils/tools'
import themes from './themes.js'

const { light, dark, type } = window.opts.highLight

function buildMarkdownLinenumber() {
    let style
    if (type.length) {
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
            $(this).find('span[style="color: #008080;"]').length !== 0
        if (!hasLineNumber) {
            $(this).css({
                padding: '10px 14px',
            })
        }
    })
}

function highlight() {
    if (pageName() !== 'post') return
    if ($('pre').length === 0) return
    buildMarkdownLinenumber()
    otherEditorLinenumberPadding()
}

export default highlight
