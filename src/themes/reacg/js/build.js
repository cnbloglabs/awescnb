const userOptions = window.userOptions

// 设置网站图标标题
const setHtmlTitleIcon = () => {
    const favicon = userOptions.theme.favicon
    const title = userOptions.theme.title

    if (favicon === '') return
    $('head').append(`<link rel="icon" href=${favicon} sizes="32x32">`)
    if (title === '') return
    document.title = title
}

export { setHtmlTitleIcon }
