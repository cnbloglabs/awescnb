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

const annotateList = [
    {
        page: 'all',
        selector: '#Header1_HeaderTitle',
        config: {
            type: 'underline',
            color: '#2196F3',
        },
    },
    {
        page: 'post',
        selector: '#cb_post_title_url',
        config: {
            type: 'highlight',
            color: '#FFF176',
        },
    },
    {
        page: 'post',
        selector: 'mark',
        config: {
            type: 'highlight',
            color: '#FFD54F',
        },
    },
    {
        page: 'post',
        selector: 's',
        config: {
            type: 'strike-through',
            color: '#FF0000',
        },
    },
    {
        page: 'post',
        selector: 'u',
        config: {
            type: 'underline',
            color: '#2196F3',
        },
    },
    {
        page: 'post',
        selector: 'strong',
        config: {
            type: 'circle',
            color: '#F44336',
        },
    },
]

const notationConfig = {
    enable: true,
}

module.exports = () => {
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
    notation(annotateList, notationConfig)
    player()
    background()
    mode()
}
