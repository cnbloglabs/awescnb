import setBodyBackground from '@plugins/background'
import { shootInitial } from '@plugins/barrage'
import imageBox from '@plugins/imageBox'
import setLive2d from '@plugins/live2d'
import setMusicPlayer from '@plugins/player'
import setTopProgress from '@plugins/progress'
import setClickEffects from '@plugins/click'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import titleFavicon from '@plugins/titleFavicon'
import comments from '@plugins/comments'
import signature from '@plugins/signature'
import highlight from '@plugins/highlight'
import btns from '@plugins/btns'
import setIcons from './icons'

function plugins() {
    setIcons()
    setBodyBackground()
    imageBox()
    shootInitial()
    setLive2d()
    setMusicPlayer()
    setTopProgress()
    setClickEffects()
    linenumbers()
    titleFavicon()
    comments()
    signature()
    highlight()
    copy()
    btns()
}

export default plugins
module.exports = plugins
