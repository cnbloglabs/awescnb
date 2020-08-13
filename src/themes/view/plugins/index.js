import './index.scss'
import footer from '@plugins/footer'
import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import imagebox from '@plugins/imagebox'
import emoji from '@plugins/emoji'
import player from '@plugins/player'
import postMessage from '@plugins/postMessage'
import signature from '@plugins/signature'
import postSignature from '@plugins/postSignature'
import commentsAvatars from '@plugins/commentsAvatars'
import notation from '@plugins/notation'
import menu from './menu'
import notice from '@plugins/notice'
import background from '@plugins/background'
import mode from '@plugins/mode'

const plugins = () => {
    commentsAvatars()
    footer()
    highlight()
    copy()
    linenumbers()
    imagebox()
    emoji()
    postMessage()
    postSignature()
    notice()
    signature()
    menu()
    notation()
    player()
    background()
    mode()
}

module.exports = plugins
