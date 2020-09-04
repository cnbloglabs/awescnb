import printing from './printing'
// import grayDay from './grayDay'

function hideLoading() {
    $('#loading').fadeOut(300)
}

function build() {
    hideLoading()
    printing()
    // grayDay()
}

module.exports = build
