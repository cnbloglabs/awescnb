import AwesCnb from '@awescnb'
import './style/index.scss'

class Gshang extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        $.getScript('//at.alicdn.com/t/font_1416496_14nsmkubys8.js')
        require('./build')()
        require('./plugins')()
    }
}

new Gshang()
