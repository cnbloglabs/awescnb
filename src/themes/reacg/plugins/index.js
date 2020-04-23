import setIcons from './icons'
import dragMenu from '@plugins/dragMenu'
import themeColor from '@plugins/themeColor'
import setBodyBackground from '@plugins/background'
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
import postSignature from '@plugins/postSignature'
import highlight from '@plugins/highlight'
// import btns from '@plugins/btns'
import postTopimage from '@plugins/postTopimage'
import emoji from '@plugins/emoji'
import lock from '@plugins/lock'
import postMessage from '@plugins/postMessage'
// import back2top from '@plugins/back2top'
import qrcode from '@plugins/qrcode'
import charts from '@plugins/charts'
import { shootInitial } from '@plugins/barrage'

function plugins() {
    dragMenu()
    themeColor()
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
    postSignature()
    highlight()
    copy()
    // btns()
    postTopimage()
    emoji()
    lock()
    postMessage()
    // back2top()
    qrcode()
    charts()
}

export default plugins
module.exports = plugins
