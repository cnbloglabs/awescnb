import '@/assets/css/common.css'
import setLive2d from './plugins/live2d'
import setMusicPlayer from './plugins/player'
import setTopProgress from './plugins/progress'
import { setClickEffects } from './plugins/click'
import { setHtmlTitleIcon, setThemeColor, setBodyBackground, hideLoading } from './build'

const userOptions = window.userOptions

class AwesCnb {
    constructor() {
        this.defaultOptions = userOptions
        this.hideLoading = hideLoading
        this.setThemeColor = setThemeColor
        this.setHtmlTitleIcon = setHtmlTitleIcon
        this.setTopProgress = setTopProgress
        this.setMusicPlayer = setMusicPlayer
        this.setBodyBackground = setBodyBackground
        this.setClickEffects = setClickEffects
    }
    init() {
        setHtmlTitleIcon()
        setTopProgress()
        setLive2d()
        setMusicPlayer()
        setThemeColor()
        setBodyBackground()
        // hideLoading()
        setClickEffects()
    }
}

export default AwesCnb
