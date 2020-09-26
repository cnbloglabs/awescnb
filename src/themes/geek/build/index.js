import indexCards from './indexCards'
import rightSide from './rightSide'
import searchbar from './searchbar'
import profile from './profile'
import leftSide from './leftSide'
import mobileMenu from './mobileMenu'

const removeClearel = () => {
    $('.clear').remove()
}

const moveFooterToMain = () => {
    $('#footer').appendTo('#main')
}

module.exports = () => {
    removeClearel()
    moveFooterToMain()
    indexCards()
    rightSide()
    searchbar()
    profile()
    leftSide()
    mobileMenu()
}
