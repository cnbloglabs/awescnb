import setBodyBackground from '@/plugins/background'
import { shootInitial } from '@/plugins/barrage'
import imageBox from '@/plugins/imageBox'
import setLive2d from '@/plugins/live2d'
import setMusicPlayer from '@/plugins/player'
import setTopProgress from '@/plugins/progress'
import setClickEffects from '@/plugins/click'
// import emoji from '@/plugins/emoji'
import setIcons from './icons'

function plugins() {
    setIcons()
    setBodyBackground()
    imageBox()
    shootInitial()
    setLive2d()
    setMusicPlayer()
    setTopProgress()
    setClickEffects()
    // emoji()
}

export default plugins
module.exports = plugins
