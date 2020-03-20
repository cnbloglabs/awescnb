import footer from './footer'
import mobileMenu from './mobileMenu'
import mode from './mode'
import color from './color'
import avatar from './avatar'
import qrcode from './qrcode'
import scroll from './scroll'
import highlight from './highlight'
import linenumbers from './linenumbers'
import copy from './copy'
import catalog from './catalog'
import btns from './btns'
import comments from './comments'
import back2top from './back2top'

function build() {
    footer()
    mobileMenu()
    mode()
    color()
    avatar()
    qrcode()
    scroll()
    highlight()
    linenumbers()
    copy()
    catalog()
    btns()
    comments()
    back2top()
}

export default build
