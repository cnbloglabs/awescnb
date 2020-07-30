import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
// import imagebox from '@plugins/imagebox'
import emoji from '@plugins/emoji'
// import player from '@plugins/player'
// import postSignature from '@plugins/postSignature'
// import notice from '@plugins/notice'
import signature from '@plugins/signature'
// import commentsAvatars from '@plugins/commentsAvatars'
// import notation from '@plugins/notation'
import menu from './menu'
import './coverPlugins.scss'

const plugins = () => {
    highlight()
    copy()
    linenumbers()
    // imagebox()
    emoji()
    signature({
        selector: '.profile-signature',
    })
    menu()
    // postSignature()
    // notice()
    // commentsAvatars()
}

module.exports = plugins
