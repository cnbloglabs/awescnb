import { theme } from './index'
import {
    footer,
    copyCode,
    linenumbers,
    imagebox,
    emoji,
    player,
    postMessage,
    signature,
    postSignature,
    commentsAvatars,
    // notation,
    toolMenu,
    notice,
    background,
    mode,
    highlight,
} from 'plugins/index'

export default () => {
    theme
        .use(footer)
        .use(copyCode)
        .use(linenumbers)
        .use(imagebox)
        .use(emoji)
        .use(player)
        .use(postMessage)
        .use(signature)
        .use(postSignature)
        .use(commentsAvatars)
        .use(highlight)
        // .use(notation)
        .use(
            toolMenu,
            {},
            {
                toolbarItems: [
                    {
                        icon: 'fa-comment-dots',
                    },
                    {
                        icon: 'fa-star',
                    },
                    {
                        icon: 'fa-heart',
                    },
                    {
                        icon: 'fa-thumbs-up',
                    },
                    {
                        enable: true,
                        icon: 'fa-adjust',
                    },
                    {
                        icon: 'fa-rocket',
                    },
                ],
            },
        )
        .use(notice)
        .use(
            background,
            {
                enable: false,
            },
            {
                opacitySelector: '#header,#sideBar,#main,#footer',
            },
        )
        .use(mode)
}
