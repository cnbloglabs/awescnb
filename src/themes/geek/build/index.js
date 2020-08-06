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
    require('./header')()
    require('./rightSide')()
    require('./searchbar')()
    require('./profile')()
    require('./leftSide')()
}

module.exports = build
