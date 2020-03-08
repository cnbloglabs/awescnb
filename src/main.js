import 'lib-flexible/flexible.js'
import { loadFiles } from '@/assets/js/tools'

if (process.env.NODE_ENV === 'development') {
    // $.awesCnb()
} else {
    loadFiles([{ name: `${userOptions.theme.name}`, type: 'js' }])
}
