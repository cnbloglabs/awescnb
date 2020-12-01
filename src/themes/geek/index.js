import './style/index.scss'
import AwesCnb from '@awescnb'
// import { getUserinfo } from '@cnblog'

class Geek extends AwesCnb {
    constructor() {
        super()
        // this.init()
        super.init(this.build)
    }

    // init() {
    //     getUserinfo()
    // }

    build() {
        require('./build')()
        require('./plugins')()
    }
}

new Geek()
