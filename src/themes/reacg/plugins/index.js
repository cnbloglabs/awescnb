import dragMenu from '@plugins/dragMenu'
import themeColor from '@plugins/themeColor'
import setBodyBackground from '@plugins/background'
import imageBox from '@plugins/imageBox'
import setLive2d from '@plugins/live2d'
import setMusicPlayer from '@plugins/player'
import setClickEffects from '@plugins/click'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import titleFavicon from '@plugins/titleFavicon'
import commentsAvatars from '@plugins/commentsAvatars'
import signature from '@plugins/signature'
import postSignature from '@plugins/postSignature'
import highlight from '@plugins/highlight'
import postMessage from '@plugins/postMessage'
import postTopimage from '@plugins/postTopimage'
import emoji from '@plugins/emoji'
import lock from '@plugins/lock'
import qrcode from '@plugins/qrcode'
import charts from '@plugins/charts'
import { shootInitial } from '@plugins/barrage'

function plugins() {
    dragMenu()
    themeColor()
    setBodyBackground()
    imageBox()
    shootInitial()
    setLive2d()
    setMusicPlayer()
    setClickEffects()
    linenumbers()
    titleFavicon()
    commentsAvatars()
    signature()
    postSignature()
    highlight()
    copy()
    emoji()
    lock()
    postMessage()
    postTopimage()
    qrcode()
    charts()
}

export default plugins
module.exports = plugins
