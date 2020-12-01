import './style/index.scss'
import AwesCnb from '@awescnb'

class Geek extends AwesCnb {
    constructor() {
        super()
        super.init(this.build)
    }

    build() {
        require('./build')()
        require('./plugins')()
    }
}

new Geek()
