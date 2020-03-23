import './index.css'
import 'lib-flexible/flexible.js'
import AwesCnb from '@/themes/awescnb'
import build from './build'
import plugins from './plugins'

class Reacg extends AwesCnb {
    constructor() {
        super()
        this.init()
        super.init()
    }

    init() {
        build()
        plugins()
    }
}

new Reacg()
