import './style/index.scss'
import menu from './menu'
import highlight from '@plugins/highlight'
import catalog from '@plugins/catalog'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import postMessage from '@plugins/postMessage'
import commentsAvatars from '@plugins/commentsAvatars'
import signature from '@plugins/signature'
import emoji from '@plugins/emoji'
import imagebox from '@plugins/imagebox'
import notice from '@plugins/notice'
import postSignature from '@plugins/postSignature'
import mode from '@plugins/mode'
import click from '@plugins/click'
import player from '@plugins/player'

// import {
//     highlight,
//     catalog,
//     copy,
//     linenumbers,
//     postMessage,
//     commentsAvatars,
//     signature,
//     emoji,
//     imagebox,
//     notice,
//     postSignature,
//     mode,
//     click,
//     player,
// } from '@plugins'

const plugins = () => {
    menu()
    highlight()
    catalog()
    copy()
    linenumbers()
    emoji()
    postMessage()
    commentsAvatars()
    imagebox()
    postSignature()
    notice()
    mode()
    signature({
        selector: '.profile-signature',
    })
    click()
    player()
}

export default plugins
