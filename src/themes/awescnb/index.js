import '@/assets/css/common.css'
// import build from './build'
import env from '@/constants/env'
import defaultOptions from '@/constants/default'

class AwesCnb {
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

    devOpts() {
        if (env === 'dev') {
            window.opts = defaultOptions
        }
        // console.log(window.opts)
        require('./build')()
    }
}

new AwesCnb().devOpts()

export default AwesCnb
