import './index.less'
import AwesCnb from '@awescnb'

class Silence extends AwesCnb {
    constructor() {
        super()
        super.init(this.build)
    }
    build() {
        require('./build')()
    }
}

new Silence()
