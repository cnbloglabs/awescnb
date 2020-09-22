import './index.scss'
import catalog from './catalog'
import menu from './menu'
import {
    highlight,
    copy,
    linenumbers,
    postMessage,
    commentsAvatars,
    signature,
    emoji,
    imagebox,
    notice,
    postSignature,
    mode,
    click,
    player,
} from '@plugins'

const plugins = () => {
    highlight()
    copy()
    linenumbers()
    emoji()
    menu()
    postMessage()
    commentsAvatars()
    catalog()
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

module.exports = plugins
