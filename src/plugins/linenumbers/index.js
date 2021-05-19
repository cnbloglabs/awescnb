// 构建代码行号
import { isPostDetailsPage, isMd } from 'utils/cnblog'
// import { linenumbersjs } from 'constants/libs'
import { linenumbersConfig } from 'options/plugins'

/**
 * 通过 linenumbersjs 构建代码行号
 * @param {*} params
 */
// function buildLineNumbersByUsingLib(params) {
//     cacheScript(linenumbersjs, () => {
//         hljs.initLineNumbersOnLoad({
//             singleLine: true,
//         })
//     })
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
