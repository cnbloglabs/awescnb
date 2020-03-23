import AwesCnb from '@/themes/awescnb'
import './index.css'

class Gshang extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        $.getScript('//at.alicdn.com/t/font_1416496_14nsmkubys8.js')
        const {
            setBack2Top,
            setAvatar,
            setHeaderBackground,
            setThemeColor,
        } = require('./build')
        setThemeColor()
        setAvatar()
        setHeaderBackground()
        setBack2Top()
    }
}

new Gshang()
