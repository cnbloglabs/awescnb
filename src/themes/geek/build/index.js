import cards from './cards'
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
    cards()
    rightSide()
    searchbar()
    profile()
    leftSide()
    mobileMenu()
}
