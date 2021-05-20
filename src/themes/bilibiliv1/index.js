import './style/index.scss'
import { createTheme } from 'awescnb'
import build from './build'

import {
    background,
    imagebox,
    live2d,
    player,
    clickEffect,
    linenumbers,
    titleFavicon,
    highlight,
    postBottomimage,
    copyCode,
} from 'plugins/index'

const theme = createTheme()

build()

theme
    .use(background)
    .use(imagebox)
    .use(live2d)
    .use(player)
    .use(clickEffect)
    .use(linenumbers, {
        enable: false,
    })
    .use(titleFavicon)
    .use(highlight)
    .use(postBottomimage)
    .use(copyCode)
