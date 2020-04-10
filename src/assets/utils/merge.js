import { chacheScript } from '@/assets/utils/tools'
import defaultOptions from '@/constants/default'
import { themeRepository } from '@/constants/urls'
// 创建 awesCnb
// 合并配置
function merge() {
    $.extend({
        awesCnb: options => {
            if (options) $.extend(true, defaultOptions, options)
            window.opts = defaultOptions
            loadTheme()
        },
    })
}

// 加载主题
function loadTheme() {
    let theme = window.opts.theme.name
    if (theme === 'light') {
        theme = 'reacg'
    }
    // load(theme)
    const url = `${themeRepository}/${theme}.js`
    chacheScript(url)
}

export default merge
