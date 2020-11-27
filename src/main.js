import { cacheScript } from '@tools'
import { themeRepository } from '@/constants/urls'

/**
 * 加载主题 js 文件
 * @param {string} theme 主题名称
 */
function loadTheme(theme) {
    const url = `${themeRepository}/${theme}.js`
    cacheScript(url)
}

/**
 * 获取主题名称
 * @param {*} options 
 */
function getThemeName(options) {
    let theme = (options.theme && options.theme.name) || 'reacg'
    if (theme === 'gshang') theme = 'bilibili'
    return theme
}

$.extend({
    awesCnb: (options = {}) => {
        window.opts = options
        const theme = getThemeName(options)
        loadTheme(theme)
    },
})
