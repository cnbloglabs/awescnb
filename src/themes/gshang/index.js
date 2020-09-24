import './style/index.scss'
import AwesCnb from '@awescnb'
import build from './build'
import plugins from './plugins'

class Gshang extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        $.getScript('//at.alicdn.com/t/font_1416496_14nsmkubys8.js')
        build()
        plugins()
    }
}

new Gshang()
