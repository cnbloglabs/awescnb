import env from '@/constants/env'
import defaultOptions from '@/constants/default'
import build from './build'

class AwesCnb {
    init(building) {
        if (env === 'dev' || $.awesCnb) {
            building()
            build()
        }
        if (!$.awesCnb) {
            $.extend({
                awesCnb: options => {
                    if (options) $.extend(true, defaultOptions, options)
                    window.opts = defaultOptions
                    building()
                    build()
                },
            })
        }
    }

    devOpts() {
        if (env === 'dev') window.opts = defaultOptions
    }
}

new AwesCnb().devOpts()

export default AwesCnb
