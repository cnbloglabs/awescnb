import defaultOptions from '@/constants/default'
import env from '@/constants/env'
let userOptions
$.extend({
    awesCnb: options => {
        if (options) {
            $.extend(true, defaultOptions, options)
        }
        userOptions = defaultOptions
    },
})

if (env === 'dev') {
    $.awesCnb()
}

console.log('merge options', userOptions)

export default userOptions
