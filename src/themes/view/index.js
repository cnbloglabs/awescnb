import './style/index.scss'
import { createTheme } from 'awescnb'
import build from './build'
import { isPostDetailsPage } from 'utils/cnblog'
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
    imagebox,
    emoji,
    codeLanguage,
} from 'plugins/index'

export const theme = createTheme()

if (!isPostDetailsPage()) {
    $('#mainContent')[0].style.display = 'block'
}

build()

theme
    .use(footer)
    .use(emoji)
    .use(imagebox)
    .use(copyCode)
    .use(codeLanguage)
    .use(linenumbers)
    .use(postSignature, { enable: true })
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
    .use(themeColor, { color: '#323EBE' })
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
