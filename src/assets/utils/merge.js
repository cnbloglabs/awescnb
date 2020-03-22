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

$.awesCnb()

// console.log('merge options')

module.exports = { ...userOptions } // common js
