import 'lib-flexible/flexible.js'
import userOptions from '@/assets/js/merge'
import { loadFiles } from '@/assets/js/tools'

window.userOptions = userOptions
// console.log(window.userOptions)

if (process.env.NODE_ENV === 'development') {
    import('@/assets/css/blog-common.min.css')
} else {
    loadFiles([{ name: `${userOptions.theme.name}`, type: 'js' }])
}
