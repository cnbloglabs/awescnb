import { userOptions } from '@/assets/js/merge'
import './css/index.css'
import {
    setHtmlTitleIcon,
    setTopProgress,
    setMusicPlayer,
    setThemeColor,
    setBodyBackground,
    hideLoading,
} from './js/build'

class AwesCnb {
    constructor() {
        this.defaultOptions = userOptions
    }
    init() {
        hideLoading()
        setThemeColor()
        setHtmlTitleIcon()
        setTopProgress()
        setMusicPlayer()
        setBodyBackground()
        // build plugins
        // setLive2d() x
        // setMusicPlayer()
        // setClickEvent()
    }
}

export { AwesCnb }
