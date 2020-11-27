import './style/index.scss'
import AwesCnb from '@awescnb'

class Gshang extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        $.getScript(
            '//at.alicdn.com/t/font_1416496_14nsmkubys8.js',
        )
        require('./build')()
        require('./plugins')()
    }
}

new Gshang()
