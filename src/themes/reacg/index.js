import './css/index.css'
import AwesCnb from '@/themes/awescnb'
import build from './build'
import plugins from './plugins'

class Reacg extends AwesCnb {
    constructor() {
        super()
        super.init()
        this.init()
    }

    init() {
        build()
        plugins()
    }
}

new Reacg()
