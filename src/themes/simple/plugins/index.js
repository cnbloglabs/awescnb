import footer from '@plugins/footer'
import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import imagebox from '@plugins/imagebox'
import commentsAvatars from '@plugins/commentsAvatars'
import dragMenu from '@plugins/dragMenu'
import donation from '@plugins/donation'
import emoji from '@plugins/emoji'
// import live2d from '@plugins/live2d'
import player from '@plugins/player'
import postMessage from '@plugins/postMessage'
import postSignature from '@plugins/postSignature'
import postTopimage from '@plugins/postTopimage'
import toast from '@plugins/toast'
// import titleFavicon from '@plugins/titleFavicon'
// import signature from '@plugins/signature'
// import background from '@plugins/background'
// import click from '@plugins/click'
// import lock from '@plugins/lock'
// import postBottomimage from '@plugins/postBottomimage'

const plugins = () => {
    footer()
    highlight()
    copy()
    linenumbers()
    imagebox()
    commentsAvatars()
    donation()
    dragMenu()
    emoji()
    // live2d()
    player()
    postMessage()
    postSignature()
    postTopimage()
    toast()
    // signature()
    // titleFavicon()    // background()
    // postBottomimage()
    // lock()
    // click()
}

module.exports = plugins
