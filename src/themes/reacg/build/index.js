import footer from './footer'
import mobileMenu from './mobileMenu'
import mode from './mode'
import avatar from './avatar'
import scroll from './scroll'
import catalog from './catalog'
import indexList from './indexList'
import notice from './notice'
import layout from './layout'


function build() {
    mobileMenu()
    mode()
    avatar()
    scroll()
    catalog()
    footer()
    indexList()
    notice()
    layout()
}

export default build

module.exports = build
