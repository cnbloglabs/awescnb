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
import dragMenu from '@plugins/dragMenu'

module.exports = () => {
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
    dragMenu()
}
