import env from '@/constants/env'
import build from './build'

class AwesCnb {
    init(building) {
        const buildTheme = () => {
            building()
            build()
        }
        if (env === 'dev') {
            window.opts = {}
            buildTheme()
            return
        }
        if ($.awesCnb) {
            buildTheme()
            return
        }
        if (!$.awesCnb) {
            $.extend({
                awesCnb: (options = {}) => {
                    window.opts = options
                    buildTheme()
                },
            })
        }
    }
}

new AwesCnb()

export default AwesCnb
