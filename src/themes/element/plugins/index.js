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
// ---------
// import back2top from '@plugins/back2top'
// import copy from '@plugins/copy'
// import imageBox from '@plugins/imageBox'
// import comments from '@plugins/comments'
// import signature from '@plugins/signature'
// import postSignature from '@plugins/postSignature'
// import highlight from '@plugins/highlight'
// import btns from '@plugins/btns'
// import postTopimage from '@plugins/postTopimage'
// import emoji from '@plugins/emoji'
// import lock from '@plugins/lock'
// import postMessage from '@plugins/postMessage'
// import qrcode from '@plugins/qrcode'
// import charts from '@plugins/charts'

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
    // ---------
    // imageBox()
    // back2top()
    // postMessage()
    // comments()
    // signature()
    // postSignature()
    // highlight()
    // btns()
    // postTopimage()
    // emoji()
    // lock()
    // qrcode()
    // charts()
}

module.exports = plugins
