import mobileMenu from './mobileMenu'
import catalog from './catalog'
import comments from './comments'
import footer from './footer'
import nav from './nav'
import postPage from './postPage'

// import indexPage from './indexPage'

module.exports = () => {
    mobileMenu()
    catalog()
    comments()
    footer()
    nav()
    postPage()
    // indexPage()
}
