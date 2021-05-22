import './style/index.scss'
import { createTheme } from 'awescnb'
import build from './build'
import {
    footer,
    copyCode,
    linenumbers,
    postSignature,
    commentsAvatars,
    toolMenu,
    mode,
    highlight,
    catalog,
    themeColor,
} from 'plugins/index'

export const theme = createTheme()

build()

theme
    .use(footer)
    .use(copyCode)
    .use(linenumbers)
    .use(postSignature)
    .use(commentsAvatars)
    .use(highlight)
    .use(
        toolMenu,
        { initialOpen: false },
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
    .use(mode)
    .use(themeColor, { color: '#3273DC' })
    .use(
        catalog,
        {},
        {
            selector: '#mainContent',
            fn: 'append',
            updateNavigation: true,
            showTitle: false,
            showScrollbar: false,
        },
    )
