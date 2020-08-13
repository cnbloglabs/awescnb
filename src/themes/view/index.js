import './style/index.scss'
import AwesCnb from '@awescnb'

class View extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        require('./plugins')()
        require('./build')()
    }
}

new View()
