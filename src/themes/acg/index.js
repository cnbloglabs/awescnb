import './index.scss'
import AwesCnb from '@awescnb'
import build from './build'
import plugins from './plugins'

class ACG extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        build()
        plugins()
    }
}

new ACG()
