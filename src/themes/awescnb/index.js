import '@/assets/css/common.css'
import { hideLoading, printing } from './build'
import env from '@/constants/env'
import defaultOptions from '@/constants/default'

class AwesCnb {
    init() {
        hideLoading()
        printing()
    }

    initOpts() {
        if (env === 'dev') {
            window.opts = defaultOptions
        } else if (!$.awesCnb) {
            $.extend({
                awesCnb: options => {
                    if (options) $.extend(true, defaultOptions, options)
                    window.opts = defaultOptions
                },
            })
        }
    }
}

new AwesCnb().initOpts()

export default AwesCnb
