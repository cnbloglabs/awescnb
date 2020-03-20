import 'lib-flexible/flexible.js'
import env from '@/constants/env'
import { loadFiles } from '@/assets/js/tools'
import userOptions from '@/assets/js/merge'
window.userOptions = userOptions
window.opts = userOptions

console.log(userOptions)


if (env === 'dev') {
    // 如果使用import()打包会多生成一个js文件
    // import('./assets/dev/blog-common.min.css')
    require('./assets/dev/blog-common.min.css')
} else {
    loadFiles([
        {
            name: `${userOptions.theme.name}`,
            type: 'js',
        },
    ])
}
