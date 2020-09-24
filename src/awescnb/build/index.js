import printing from './printing'

function hideLoading() {
    $('#loading').fadeOut(300)
}

export default () => {
    hideLoading()
    printing()
}
