// 构建代码行号
import { isPostDetailsPage, isMd } from 'utils/cnblog'
// import { linenumbersjs } from 'constants/libs'
import { linenumbersConfig } from 'options/plugins'

/**
 * 通过 linenumbersjs 构建代码行号
 * @param {*} params
 */
// function buildLineNumbersByUsingLib(params) {
//     loadScript(linenumbersjs, () => {
//         hljs.initLineNumbersOnLoad({
//             singleLine: true,
//         })
//     })
// }

//TODO
// function getRow(container) {
//     function pxToNumber(px) {
//         let num = Number(px.replace('px', ''))
//         return num
//     }

//     let clone = container.clone().appendTo('body')

//     // clear some style
//     clone.css({
//         height: 'auto',
//         'padding-top': 0,
//         'padding-bottom': 0,
//         'margin-top': 0,
//         'margin-bottom': 0,
//         visibility: 'hidden',
//     })

//     // get line-height
//     let style = window.getComputedStyle(clone[0], null)
//     let fontSize = style.fontSize
//     let lineHeight = style.lineHeight === 'normal' ? fontSize : style.lineHeight

//     //get row count
//     let height = style.height
//     let row = pxToNumber(height) / pxToNumber(lineHeight)

//     clone.remove()
//     return row
// }

/**
 * 构建代码行号
 */
function buildLinenumbers() {
    $('pre code').each(function() {
        const linenumberContainer = $('<ul/>').addClass('awes-linenumber')
        const lines =
            $(this)
                .text()
                .split('\n').length - 1

        for (let i = 1; i <= lines; i++) {
            linenumberContainer.append($('<li/>').text(i))
        }

        $(this).before(linenumberContainer)
    })
}

export default (theme, devOptions) => {
    const { enable } = linenumbersConfig(devOptions)
    if (!isPostDetailsPage) return
    if (!enable) return
    if (!isMd()) return
    buildLinenumbers()
}
