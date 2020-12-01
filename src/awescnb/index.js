import env from '@/constants/env'
import build from './build'
import { getUserinfo } from './utils'

class AwesCnb {
    init(building) {
        getUserinfo()
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
