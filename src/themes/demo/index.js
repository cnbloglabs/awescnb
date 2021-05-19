import './index.scss'
import AwesCnb from '@awescnb'
import { click } from '@plugins'

class Demo extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }
    init() {
        // 这里的任何 js 都会被执行
        click()
    }
}
new Demo()
