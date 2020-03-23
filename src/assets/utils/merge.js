import { load } from '@/assets/utils/tools'
import defaultOptions from '@/constants/default'

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
    console.log('正在使用的主题:', theme)
    if (theme === 'acg' || theme === 'light') {
        theme = 'reacg'
    }
    load(theme)
}

export default merge
