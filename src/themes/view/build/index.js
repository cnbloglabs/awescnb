const build = () => {
    require('./indexCards')()
    require('./header')()
    require('./side')()
    require('./catalog')()
    // require('./scroll')()
}

module.exports = build
