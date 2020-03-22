import env from '@/constants/env'
import { loadFiles } from '@/assets/utils/tools'
const userOptions = require('@/assets/utils/merge')

window.opts = userOptions
// console.log(window.opts)

if (env === 'dev') {
    require('./assets/dev/blog-common.min.css')
} else {
    let theme = userOptions.theme.name
    if(theme === 'acg' || theme === 'light') {
        theme = 'reacg'
    }
    loadFiles([
        {
            name: `${theme}`,
            type: 'js',
        },
    ])
}
