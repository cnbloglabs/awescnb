import '@/assets/css/common.css'
import { hideLoading, printing } from './build'
import env from '@/constants/env'
import defaultOptions from '@/constants/default'

class AwesCnb {
    init(building) {
        hideLoading()
        printing()
        if (env === 'dev') {
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
    }
}

new AwesCnb().devOpts()

export default AwesCnb
