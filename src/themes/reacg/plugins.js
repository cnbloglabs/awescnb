import { reacg } from './index'
import {
    toolMenu,
    footer,
    themeColor,
    background,
    imagebox,
    // barrage,
    live2d,
    player,
    clickEffect,
    linenumbers,
    titleFavicon,
    commentsAvatars,
    signature,
    postSignature,
    highlight,
    copyCode,
    emoji,
    lock,
    postMessage,
    postTopimage,
    postBottomimage,
    qrcode,
    chart,
    donation,
    notice,
    mode,
    catalog,
} from 'plugins/index'

export default () => {
    reacg
        .use(themeColor)
        .use(toolMenu)
        .use(footer)
        .use(
            background,
            {
                enable: false,
            },
            {
                opacitySelector: '#navigator,#footer,#main',
            },
        )
        .use(imagebox)
        // .use(barrage)
        .use(live2d, {
            enable: true,
        })
        .use(player)
        .use(clickEffect, {
            enable: true,
        })
        .use(linenumbers, {
            enable: true,
        })
        .use(titleFavicon)
        .use(commentsAvatars)
        .use(signature)
        .use(postSignature)
        .use(highlight)
        .use(copyCode)
        .use(emoji)
        .use(lock)
        .use(postMessage)
        .use(postTopimage, {
            enable: false,
        })
        .use(postBottomimage)
        .use(qrcode)
        .use(chart, { enable: false })
        .use(donation)
        .use(notice, { enable: true })
        .use(mode)
        .use(
            catalog,
            {
                enable: true,
            },
            {
                selector: '#main',
                fn: 'prepend',
            },
        )
}
