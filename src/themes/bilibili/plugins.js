import { bilibili } from './index'
import {
    // background,
    // imagebox,
    // live2d,
    // player,
    // clickEffect,
    // linenumbers,
    // titleFavicon,
    // highlight,
    // postBottomimage,
    toolMenu,
    copyCode,
} from 'plugins/index'

export default () => {
    bilibili
        // .use(background)
        // .use(imagebox)
        // .use(live2d)
        // .use(player)
        // .use(clickEffect)
        // .use(linenumbers, { enable: false })
        // .use(titleFavicon)
        // .use(highlight)
        // .use(postBottomimage)
        .use(toolMenu)
        .use(copyCode)
}
