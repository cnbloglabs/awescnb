import './style/index.scss'
import AwesCnb from '@awescnb'

class Reacg extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        require('./build')()
        require('./plugins')()
        console.log(333333)
    }
}

new Reacg()
