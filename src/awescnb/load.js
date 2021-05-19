import { cacheScript } from 'utils/helpers'
import { themeRepository } from 'constants/urls'

/**
 * 加载皮肤 js 文件
 * @param {string} theme 皮肤名称
 */
function loadTheme(theme) {
    cacheScript(`${themeRepository}/${theme}.js`)
}

/**
 * 确保皮肤名称
 * @param {*} options
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
        const themeName = options?.theme?.name
        loadTheme(ensureThemeName(themeName))
    },
})
