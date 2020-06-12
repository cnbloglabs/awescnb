import mobileMenu from './mobileMenu'
import mode from './mode'
import avatar from './avatar'
import scroll from './scroll'
import catalog from './catalog'
import indexList from './indexList'
import notice from './notice'
import setIcons from './icons'
import comments from './comments'
// import indexTimeline from './indexTimeline'

function build() {
    mobileMenu()
    mode()
    avatar()
    scroll()
    catalog()
    indexList()
    notice()
    setIcons()
    comments()
    // indexTimeline()
}

module.exports = build
