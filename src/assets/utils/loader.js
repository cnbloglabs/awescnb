import { cacheScript } from '@tools'
import defaultOptions from '@/constants/default'
import { themeRepository } from '@/constants/urls'

function loadTheme() {
    let theme = window.opts.theme.name
    if (theme === 'light') theme = 'reacg'
    const url = `${themeRepository}/${theme}.js`
    cacheScript(url)
}

// 创建 awesCnb
// 合并配置
function loader() {
    $.extend({
        awesCnb: options => {
            if (options) $.extend(true, defaultOptions, options)
            window.opts = defaultOptions
            loadTheme()
        },
    })
}

export default loader
