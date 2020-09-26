import setIcons from './icons'
import setBodyBackground from '@plugins/background'
import imagebox from '@plugins/imagebox'
import setLive2d from '@plugins/live2d'
import setMusicPlayer from '@plugins/player'
import setClickEffects from '@plugins/click'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import titleFavicon from '@plugins/titleFavicon'
import commentsAvatars from '@plugins/commentsAvatars'
import signature from '@plugins/signature'
import highlight from '@plugins/highlight'
import themeColor from '@plugins/themeColor'
import '@plugins/themeColor/index.scss'
import '@plugins/background/index.scss'
import '@plugins/imagebox/index.scss'
import '@plugins/live2d/index.scss'
import '@plugins/player/index.scss'
import '@plugins/click/index.scss'
import '@plugins/copy/index.scss'
import '@plugins/linenumbers/index.scss'
import '@plugins/titleFavicon/index.scss'
import '@plugins/commentsAvatars/index.scss'
import '@plugins/signature/index.scss'
import '@plugins/highlight/index.scss'

module.exports = () => {
    themeColor()
    setIcons()
    setBodyBackground()
    imagebox()
    setLive2d({
        position: 'right',
    })
    setMusicPlayer()
    setClickEffects()
    linenumbers()
    titleFavicon()
    commentsAvatars()
    signature()
    highlight()
    copy()
}
