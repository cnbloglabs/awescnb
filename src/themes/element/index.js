import './index.css'
import AwesCnb from '@awescnb'

class Reacg extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        require('./build')()
        require('./plugins')()
    }
}

new Reacg()
