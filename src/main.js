import { cacheScript } from '@tools'
import { themeRepository } from '@/constants/urls'

/**
 * 加载主题 js 文件
 * @param {*} theme 主题名称
 */
function loadTheme(theme) {
    const url = `${themeRepository}/${theme}.js`
    cacheScript(url)
}

$.extend({
    awesCnb: (options = {}) => {
        window.opts = options
        const theme = options.theme
            ? options.theme.name
                ? options.theme.name
                : 'reacg'
            : 'reacg'
        loadTheme(theme)
    },
})
