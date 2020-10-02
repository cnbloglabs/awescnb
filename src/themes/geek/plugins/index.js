import './style/index.scss'
import background from '@plugins/background'
import catalog from '@plugins/catalog'
import themeColor from '@plugins/themeColor'
import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import postMessage from '@plugins/postMessage'
import commentsAvatars from '@plugins/commentsAvatars'
import signature from '@plugins/signature'
import emoji from '@plugins/emoji'
import imagebox from '@plugins/imagebox'
import postSignature from '@plugins/postSignature'
import notice from '@plugins/notice'
import click from '@plugins/click'
import player from '@plugins/player'
import mode from '@plugins/mode'
import menu from './menu'

const themeColotOptions = {
    color: '#1B86F9',
}

const signatureOptions = {
    enable: true,
    contents: [
        '欢迎使用皮肤<b style="color:#3742fa">Geek</b>',
        '快去自定义签名吧~',
    ],
}

const signaturePluginConfig = {
    selector: '.profile-signature',
}

const modeOptions = {
    enable: true,
    autoDark: false,
    autoLight: false,
}

const clickOptions = {
    enable: false,
    auto: false,
    colors: [],
    size: 30,
    maxCount: 15,
}

const playerOptions = {
    enable: false,
}

const catalogPluginConfig = {
    selector: '#sidebar_news',
    fn: 'before',
}

module.exports = () => {
    background()
    catalog(catalogPluginConfig)
    themeColor(themeColotOptions)
    highlight()
    copy()
    linenumbers()
    postMessage()
    commentsAvatars()
    signature(signatureOptions, signaturePluginConfig)
    emoji()
    imagebox()
    postSignature()
    notice()
    click(clickOptions)
    player(playerOptions)
    menu()
    mode(modeOptions)
}
