import './index.scss'
import AwesCnb from '@awescnb'
class Silence extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }
    init() {
        // 这里的任何 js 都会被执行
    }
}
new Silence()
