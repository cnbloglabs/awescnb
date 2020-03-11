import 'lib-flexible/flexible.js'
import userOptions from '@/assets/js/merge'
import env from '@/constants/env'
import { loadFiles } from '@/assets/js/tools'

window.userOptions = userOptions

if (env === 'dev') {
    import('@/assets/css/blog-common.min.css')
} else {
    loadFiles([
        {
            name: `${userOptions.theme.name}`,
            type: 'js',
        },
    ])
}
