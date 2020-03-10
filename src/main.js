import 'lib-flexible/flexible.js'
import userOptions from '@/assets/js/merge'
import { loadFiles } from '@/assets/js/tools'
import env from '@/constants/env'

window.userOptions = userOptions
// console.log(window.userOptions)

if (env === 'dev') {
    import('@/assets/css/blog-common.min.css')
} else {
    loadFiles([{ name: `${userOptions.theme.name}`, type: 'js' }])
}
