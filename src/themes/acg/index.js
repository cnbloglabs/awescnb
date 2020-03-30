import './index.css'
import 'lib-flexible/flexible.js'
import AwesCnb from '@/themes/awescnb'

class ACG extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        const build = require('./build')
        const plugins = require('./plugins')
        build()
        plugins()
    }
}

new ACG()
