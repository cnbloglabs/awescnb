import { isOwner } from '@constants/cnblog'

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
const hideVisitorEls = () => {
    if (isOwner) return
    const els = [
        '#navList>li:last',
        '#navList>li:nth-child(3)',
        // '.account-user span',
    ]
    for (const el of els) {
        $(el).hide()
    }
}

const build = () => {
    require('./indexCards')()
    require('./rightSide')()
    require('./searchbar')()
    require('./profile')()
    require('./leftSide')()
    require('./mobileMenu')()
    removeClearel()
    moveFooterToMain()
    hideVisitorEls()
}

module.exports = build
