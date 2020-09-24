import { cacheScript } from '@tools'
import { themeRepository } from '@/constants/urls'
import defaultOptions from '@/constants/default'

function loadTheme() {
    let theme = window.opts.theme.name
    if (theme === 'light') theme = 'reacg'
    const url = `${themeRepository}/${theme}.js`
    cacheScript(url)
}

$.extend({
    awesCnb: options => {
        if (options) $.extend(true, defaultOptions, options)
        window.opts = defaultOptions
        loadTheme()
    },
})
