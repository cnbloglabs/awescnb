import './style/index.scss'
import AwesCnb from '@awescnb'
import plugins from './plugins'
import build from './build'

class Geek extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        build()
        plugins()
    }
}

new Geek()
