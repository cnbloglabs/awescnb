const removeClearel = () => {
    $('.clear').remove()
}

const moveFooterToMain = () => {
    $('#footer').appendTo('#main')
}

const build = () => {
    removeClearel()
    moveFooterToMain()
    require('./indexCards')()
    require('./rightSide')()
    require('./searchbar')()
    require('./profile')()
    require('./leftSide')()
    require('./mobileMenu')()
}

module.exports = build
