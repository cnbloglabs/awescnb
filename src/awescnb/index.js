import env from '@/constants/env'
import build from './build'

class AwesCnb {
    init(building) {
        // buile theme
        const buildTheme = () => {
            building()
            build()
        }
        // dev or using theme loader by index.js
        if (env === 'dev' || $.awesCnb) {
            buildTheme()
            return
        }
        // use single theme file.
        if (!$.awesCnb) {
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
