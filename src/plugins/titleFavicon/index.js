// 设置网站图标和标题
// 引入即可

function setTitle() {
    const { title } = window.opts.theme
    if (title === '') return
    document.title = title
}

function setFavicon() {
    const { favicon } = window.opts.theme
    if (favicon === '') return
    document.getElementById('favicon').href = favicon
}

function titleFavicon() {
    setTitle()
    setFavicon()
}

export default titleFavicon
