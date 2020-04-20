import { shootInitial } from '@plugins/barrage'
import setBodyBackground from '@plugins/background'
import imageBox from '@plugins/imageBox'
import setLive2d from '@plugins/live2d'
import setMusicPlayer from '@plugins/player'
import setTopProgress from '@plugins/progress'
import setClickEffects from '@plugins/click'
// import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import titleFavicon from '@plugins/titleFavicon'
// import back2top from '@plugins/back2top'
import themeColor from '@plugins/themeColor'
// ---------
import SideFloatBtns from './SideFloatBtns'
import catalog from './catalog'
import emoji from './emoji'
import toast from './toast'
import copy from './copy'
// ---------
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
    imageBox()
    shootInitial()
    setLive2d()
    setMusicPlayer()
    setTopProgress()
    setClickEffects()
    linenumbers()
    titleFavicon()
    // back2top()
    // ---------
    copy()
    SideFloatBtns()
    catalog()
    emoji()
    toast()
    // ---------
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
