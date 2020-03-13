import './css/index.css'
import AwesCnb from '@/themes/awescnb'
import setBodyBackground from '@/plugins/background'
import imageBox from '@/plugins/imageBox'
import setIcons from './plugins/icons'
import footer from './build/footer'
import mobileMenu from './build/mobileMenu'

class Reacg extends AwesCnb {
    constructor() {
        super()
        super.init()
        this.init()
        this.v = 'v1.5.0'
    }

    init() {
        this.hideLoading()
        setIcons()
        footer()
        setBodyBackground()
        mobileMenu()
        imageBox()
    }
}

new Reacg()
