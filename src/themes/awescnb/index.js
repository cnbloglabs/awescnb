import '@/assets/css/common.css'
import setLive2d from '@/plugins/awescnb/live2d'
import setMusicPlayer from '@/plugins/awescnb/player'
import setTopProgress from '@/plugins/awescnb/progress'
import { setClickEffects } from '@/plugins/awescnb/click'
import {
    setHtmlTitleIcon,
    setThemeColor,
    setBodyBackground,
    hideLoading,
} from './build'

class AwesCnb {
    constructor() {
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
