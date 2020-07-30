const removeClearel = () => {
    $('.clear').remove()
}

const moveFooter = () => {
    $('#footer').appendTo('#main')
}

const build = () => {
    removeClearel()
    moveFooter()
    require('./indexCards')()
    require('./header')()
    require('./side')()
    require('./catalog')()
    require('./searchbar')()
    require('./profile')()
    require('./leftSide')()
}

module.exports = build
