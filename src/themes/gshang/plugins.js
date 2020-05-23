import setBodyBackground from '@plugins/background'
import imageBox from '@plugins/imageBox'
import setLive2d from '@plugins/live2d'
import setMusicPlayer from '@plugins/player'
import setClickEffects from '@plugins/click'
import linenumbers from '@plugins/linenumbers'
import titleFavicon from '@plugins/titleFavicon'
import postSignature from '@plugins/postSignature'
import highlight from '@plugins/highlight'
import postBottomimage from '@plugins/postBottomimage'
import lock from '@plugins/lock'

function plugins() {
    setBodyBackground()
    imageBox()
    setLive2d()
    setMusicPlayer()
    setClickEffects()
    linenumbers()
    titleFavicon()
    postSignature()
    highlight()
    lock()
    postBottomimage()
}

module.exports = plugins
