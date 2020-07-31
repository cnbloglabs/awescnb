import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import postMessage from '@plugins/postMessage'
import commentsAvatars from '@plugins/commentsAvatars'
import signature from '@plugins/signature'
import emoji from '@plugins/emoji'
import menu from './menu'
import './coverPlugins.scss'
// import imagebox from '@plugins/imagebox'
// import player from '@plugins/player'
// import postSignature from '@plugins/postSignature'
// import notice from '@plugins/notice'
// import notation from '@plugins/notation'

const plugins = () => {
    highlight()
    copy()
    linenumbers()
    emoji()
    signature({
        selector: '.profile-signature',
    })
    menu()
    postMessage()
    commentsAvatars()
    // postSignature()
    // imagebox()
    // notice()
}

module.exports = plugins
