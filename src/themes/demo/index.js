import './index.css'
import AwesCnb from '@awescnb'
class Demo extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }
    init() {
        // 这里的任何 js 都会被执行
    }
}
new Demo()
