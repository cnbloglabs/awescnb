import './style/index.scss'
import { createTheme } from 'awescnb'
import build from './build'
import {
    background,
    live2d,
    player,
    clickEffect,
    titleFavicon,
    themeColor,
} from 'plugins/index'

const element = createTheme()

build()

element
    .use(background)
    .use(live2d)
    .use(player)
    .use(clickEffect)
    .use(titleFavicon)
    .use(themeColor)
