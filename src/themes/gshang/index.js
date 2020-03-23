import AwesCnb from '@/themes/awescnb'
import './index.css'
import {
    setBack2Top,
    setAvatar,
    setHeaderBackground,
    setThemeColor,
} from './build'

class Gshang extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        $.getScript('//at.alicdn.com/t/font_1416496_14nsmkubys8.js')
        setThemeColor()
        setAvatar()
        setHeaderBackground()
        setBack2Top()
    }
}

new Gshang()
