import './index.css'
import AwesCnb from '@awescnb'

class Reacg extends AwesCnb {
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

new Reacg()
