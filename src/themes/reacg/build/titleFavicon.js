const options = window.opts.theme

// 设置网站图标标题
function setTitle() {
    const title = options.title
    if (title === '') return
    document.title = title
}

function setFavicon() {
    const favicon = options.favicon
    if (favicon === '') return
    $('head').append(`<link rel="icon" href=${favicon} sizes="32x32">`)
}

function titleFavicon() {
    setTitle()
    setFavicon()
}

export default titleFavicon
