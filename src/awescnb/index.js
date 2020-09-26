import env from '@/constants/env'
import build from './build'

class AwesCnb {
    init(building) {
        const buildTheme = () => {
            building()
            build()
        }

        if (env === 'dev' || $.awesCnb) {
            buildTheme()
        }

        if (!$.awesCnb && env !== 'dev') {
            $.extend({
                awesCnb: (options = {}) => {
                    window.opts = options
                    buildTheme()
                },
            })
        }
    }
    devOpts() {
        if (env === 'dev') window.opts = {}
    }
}

new AwesCnb().devOpts()
export default AwesCnb
