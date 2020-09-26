import setBodyBackground from '@plugins/background'
import imagebox from '@plugins/imagebox'
import setLive2d from '@plugins/live2d'
import setMusicPlayer from '@plugins/player'
import setClickEffects from '@plugins/click'
import linenumbers from '@plugins/linenumbers'
import titleFavicon from '@plugins/titleFavicon'
import highlight from '@plugins/highlight'
import postBottomimage from '@plugins/postBottomimage'

module.exports = () => {
    setBodyBackground()
    imagebox()
    setLive2d()
    setMusicPlayer()
    setClickEffects()
    linenumbers()
    titleFavicon()
    highlight()
    postBottomimage()
}
