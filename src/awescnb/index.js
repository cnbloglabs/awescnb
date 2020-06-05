import '@/assets/style/common.css'
import env from '@/constants/env'
import defaultOptions from '@/constants/default'

class AwesCnb {
    init(building) {
        if (env === 'dev' || $.awesCnb) {
            building()
            require('./build/index')()
        } else {
            $.extend({
                awesCnb: options => {
                    if (options) $.extend(true, defaultOptions, options)
                    window.opts = defaultOptions
                    building()
                    require('./build/index')()
                },
            })
        }
    }

    devOpts() {
        if (env === 'dev') {
            window.opts = defaultOptions
        }
    }
}

new AwesCnb().devOpts()

export default AwesCnb
