import '@/assets/css/common.css'
import {
    setHtmlTitleIcon,
    setTopProgress,
    setLive2d,
    setMusicPlayer,
    setThemeColor,
    setBodyBackground,
    hideLoading,
    setClickEffects,
} from './build'

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
