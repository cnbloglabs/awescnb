import footer from './footer'
import mobileMenu from './mobileMenu'
import mode from './mode'
import avatar from './avatar'
import scroll from './scroll'
import catalog from './catalog'
import themeColor from './themeColor'
import indexList from './indexList'
import notice from './notice'
import signature from './signature'

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
    signature()
}

export default build

module.exports = build
