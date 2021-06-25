import { loadScript } from 'utils/helpers'
import { themeRepository } from 'constants/urls'

/**
 * 加载皮肤 js 文件
 * @param {string} theme 皮肤名称
 */
function loadTheme(theme) {
    loadScript(`${themeRepository}/${theme}.js`)
}

/**
 * 确保皮肤名称
 * @param {string} options
 */
function ensureThemeName(themeName) {
    let theme = (themeName && themeName) || 'reacg'
    const themeMap = {
        acg: () => 'reacg',
        bili: () => 'bilibili',
        gshang: () => 'bilibili',
        default: () => theme,
    }
    const themeActions = themeMap[theme] || themeMap['default']
    return themeActions()
}

$.extend({
    awesCnb: (options = {}) => {
        window.opts = options
        const themeName = options.theme && options.theme.name
        loadTheme(ensureThemeName(themeName))
    },
})
