import './index.scss'
import AwesCnb from '@awescnb'

class ACG extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        require('./build')()
        require('./plugins')()
    }
}

new ACG()
