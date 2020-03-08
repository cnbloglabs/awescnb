import defaultOptions from '@/constants/default'
let userOptions
$.extend({
    awesCnb: options => {
        if (options) {
            $.extend(true, defaultOptions, options)
        }
        userOptions = defaultOptions
    },
})

if (process.env.NODE_ENV === 'development') {
    $.awesCnb()
}

// console.log('merge options');

export default userOptions
