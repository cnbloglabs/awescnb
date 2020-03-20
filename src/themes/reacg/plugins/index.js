import setBodyBackground from '@/plugins/background'
import barrage from '@/plugins/barrage'
import imageBox from '@/plugins/imageBox'
import setIcons from './icons'

function plugins() {
    setIcons()
    setBodyBackground()
    imageBox()
    barrage()
}

export default plugins