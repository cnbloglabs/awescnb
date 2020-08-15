import mobileMenu from './mobileMenu'
// import mode from './mode'
import avatar from './avatar'
import scroll from './scroll'
import catalog from './catalog'
import indexList from './indexList'
import setIcons from './icons'
import comments from './comments'

function build() {
    mobileMenu()
    // mode()
    avatar()
    scroll()
    catalog()
    indexList()
    setIcons()
    comments()
}

module.exports = build
