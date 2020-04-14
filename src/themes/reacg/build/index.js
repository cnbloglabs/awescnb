import footer from './footer'
import mobileMenu from './mobileMenu'
import mode from './mode'
import avatar from './avatar'
import scroll from './scroll'
import catalog from './catalog'
import themeColor from './themeColor'
import indexList from './indexList'
import notice from './notice'

function build() {
    mobileMenu()
    mode()
    avatar()
    scroll()
    catalog()
    themeColor()
    footer()
    indexList()
    notice()
}

export default build

module.exports = build
