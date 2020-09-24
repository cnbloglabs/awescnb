import './index.scss'
import footer from '@plugins/footer'
import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import imagebox from '@plugins/imagebox'
import donation from '@plugins/donation'
import emoji from '@plugins/emoji'
import player from '@plugins/player'
import postMessage from '@plugins/postMessage'
import postSignature from '@plugins/postSignature'
import notice from '@plugins/notice'
import signature from '@plugins/signature'
import commentsAvatars from '@plugins/commentsAvatars'
import menu from './menu'
// import postTopimage from '@plugins/postTopimage'
// import titleFavicon from '@plugins/titleFavicon'
// import live2d from '@plugins/live2d'
// import background from '@plugins/background'
// import click from '@plugins/click'
// import lock from '@plugins/lock'
// import postBottomimage from '@plugins/postBottomimage'

export default () => {
    footer()
    highlight()
    copy()
    linenumbers()
    imagebox()
    donation()
    emoji()
    player()
    postMessage()
    postSignature()
    notice()
    signature()
    commentsAvatars()
    menu()
    // postTopimage()
    // live2d()
    // titleFavicon()    // background()
    // postBottomimage()
    // lock()
    // click()
}
