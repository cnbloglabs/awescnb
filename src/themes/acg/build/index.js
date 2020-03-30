import mobileMenu from './mobileMenu'
import catalog from './catalog'
import comments from './comments'
import footer from './footer'
import indexPage from './indexPage'
import nav from './nav'
import postPage from './postPage'
import themeColor from './themeColor'

function build() {
    mobileMenu()
    catalog()
    comments()
    footer()
    indexPage()
    nav()
    postPage()
    themeColor()
}

export default build
module.exports = build
