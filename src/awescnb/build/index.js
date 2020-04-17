import printing from './printing'
import grayDay from './grayDay'

function hideLoading() {
    setTimeout(() => {
        $('#loading').fadeOut(200)
    }, 180)
}

function build() {
    hideLoading()
    printing()
    grayDay()
}

module.exports = build
export default build
