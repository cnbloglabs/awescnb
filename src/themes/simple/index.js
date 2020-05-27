import './style/index.scss'
import AwesCnb from '@awescnb'

class Simple extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        require('./build')()
        require('./plugins')()
    }
}

new Simple()
