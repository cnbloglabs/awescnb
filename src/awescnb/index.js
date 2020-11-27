import env from '@/constants/env'
import build from './build'

class AwesCnb {
    init(building) {
        // buile theme
        const buildTheme = () => {
            building()
            build()
        }
        // development
        if (env === 'dev') {
            buildTheme()
            return
        }
        // use theme loader by index.js
        if ($.awesCnb) {
            buildTheme()
            return
        }
        // use single theme file.
        if (!$.awesCnb) {
            console.log(123)
            $.extend({
                awesCnb: (options = {}) => {
                    window.opts = options
                    buildTheme()
                },
            })
        }

        // if (env === 'dev' || $.awesCnb) {
        //     buildTheme()
        // }

        // if (!$.awesCnb && env !== 'dev') {
        //     $.extend({
        //         awesCnb: (options = {}) => {
        //             window.opts = options
        //             buildTheme()
        //         },
        //     })
        // }
    }
    devOpts() {
        if (env === 'dev') window.opts = {}
    }
}

new AwesCnb().devOpts()

export default AwesCnb
