import { theme } from './index'
import {
    themeColor,
    footer,
    highlight,
    copyCode,
    linenumbers,
    imagebox,
    donation,
    emoji,
    player,
    postMessage,
    postSignature,
    notice,
    signature,
    commentsAvatars,
    toolMenu,
} from 'plugins/index'

export default () => {
    theme
        .use(themeColor)
        .use(footer)
        .use(highlight)
        .use(copyCode)
        .use(linenumbers)
        .use(imagebox)
        .use(donation)
        .use(emoji)
        .use(player)
        .use(postMessage)
        .use(postSignature)
        .use(notice)
        .use(signature)
        .use(commentsAvatars)
        .use(toolMenu)
}
