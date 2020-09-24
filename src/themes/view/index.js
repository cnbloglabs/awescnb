import './style/index.scss'
import AwesCnb from '@awescnb'
import plugins from './plugins'
import build from './build'

class View extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        plugins()
        build()
    }
}

new View()
