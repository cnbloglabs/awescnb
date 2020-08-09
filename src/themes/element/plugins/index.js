import { shootInitial } from '@plugins/barrage'
import setBodyBackground from '@plugins/background'
import setLive2d from '@plugins/live2d'
import setMusicPlayer from '@plugins/player'
import setTopProgress from '@plugins/progress'
import setClickEffects from '@plugins/click'
import linenumbers from '@plugins/linenumbers'
import titleFavicon from '@plugins/titleFavicon'
import themeColor from '@plugins/themeColor'
// ---------
import SideFloatBtns from './SideFloatBtns'
import catalog from './catalog'
import emoji from './emoji'
import toast from './toast'
import copy from './copy'
import fancyImgbox from './fancyImgbox'

function plugins() {
    themeColor()
    setBodyBackground()
    shootInitial()
    setLive2d()
    setMusicPlayer()
    setTopProgress()
    setClickEffects()
    linenumbers()
    titleFavicon()
    fancyImgbox()
    // ---------
    copy()
    SideFloatBtns()
    catalog()
    emoji()
    toast()
}

module.exports = plugins
