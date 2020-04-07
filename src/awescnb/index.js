import '@/assets/css/common.css'
import env from '@/constants/env'
import defaultOptions from '@/constants/default'

class AwesCnb {
    // building
    init(building) {
        if (env === 'dev' || $.awesCnb) {
            building()
        } else {
            $.extend({
                awesCnb: options => {
                    if (options) $.extend(true, defaultOptions, options)
                    window.opts = defaultOptions
                    building()
                },
            })
        }
    }

    // dev env
    devOpts() {
        if (env === 'dev') {
            window.opts = defaultOptions
        }
        require('./build')()
    }
}

new AwesCnb().devOpts()

export default AwesCnb
