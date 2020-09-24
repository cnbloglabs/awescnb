import indexCards from './indexCards'
import rightSide from './rightSide'
import searchbar from './searchbar'
import profile from './profile'
import leftSide from './leftSide'
import mobileMenu from './mobileMenu'

/**
 * Remove clear elements.
 */
const removeClearel = () => {
    $('.clear').remove()
}

/**
 * Move footer to main ccontainer.
 */
const moveFooterToMain = () => {
    $('#footer').appendTo('#main')
}

/**
 * Hidden some elements when visitors visit
 */
// const hideVisitorEls = () => {
//     if (isOwner) return
//     const els = [
//         '#navList>li:last',
//         '#navList>li:nth-child(3)',
//         // '.account-user span',
//     ]
//     for (const el of els) {
//         $(el).hide()
//     }
// }

const build = () => {
    removeClearel()
    moveFooterToMain()
    indexCards()
    rightSide()
    searchbar()
    profile()
    leftSide()
    mobileMenu()
}

export default build
