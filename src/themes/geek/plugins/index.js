import './coverPlugins.scss'
import './index.scss'
import catalog from './catalog'
import menu from './menu'
import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import postMessage from '@plugins/postMessage'
import commentsAvatars from '@plugins/commentsAvatars'
import signature from '@plugins/signature'
import emoji from '@plugins/emoji'
import imagebox from '@plugins/imagebox'
import notice from '@plugins/notice'
import postSignature from '@plugins/postSignature'

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
    catalog()
    imagebox()
    postSignature()
    notice()
}

module.exports = plugins
