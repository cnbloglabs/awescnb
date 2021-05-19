/**
 * 构建代码块语言
 * 仅在 Markdown 博文中生效
 */
import { isPostDetailsPage, isMd } from 'utils/cnblog'
import { linenumbersConfig } from 'options/plugins'

/**
 * 构建代码块语言
 */
function buildCodeWrapLanguage() {
    $('pre code').each(function() {
        const lang = $(this)[0].classList[1]
        if (lang !== undefined) {
            const languageContainer = $('<div>')
                .addClass('awes-lang')
                .text(lang)
            $(this).before(languageContainer)
        }
    })
}

export default (theme, devOptions) => {
    // 先跟随 linenumbers 的配置
    const { enable } = linenumbersConfig(devOptions)
    if (!enable) return
    if (!isPostDetailsPage) return
    if (!isMd()) return
    buildCodeWrapLanguage()
}
