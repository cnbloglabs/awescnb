const buildLeftside = () => {
    $('#home').append("<div id='left-side'>")
}

const moveFooter = () => {
    $('#footer').appendTo('#main')
}

const removeHeaderToLeftside = () => {
    const el = $('<div id="nav">').append('<h3>MENU</h3>')
    $('#left-side').prepend(el)
    $('#navList').appendTo($('#nav'))
}

const build = () => {
    require('./indexCards')()
    require('./header')()
    require('./side')()
    require('./catalog')()
    moveFooter()
    buildLeftside()
    removeHeaderToLeftside()
}

module.exports = build
