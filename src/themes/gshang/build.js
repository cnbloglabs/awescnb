const opts = window.opts
const icons = {
    back2top: '#ac-back2top', //返回顶部
}

// 返回顶部
function setBack2Top() {
    const option = opts.back2top
    if (!option.enable) {
        return
    }
    const svg = iconInSvg(icons.back2top)
    let elements = $(`<div id="back2Top">${svg}</div>`)
        .appendTo('body')
        .click(() => {
            $('html, body').animate({ scrollTop: 0 }, 300)
        })
    $(window).bind('scroll', () => {
        let scrollTop = $(document).scrollTop()
        scrollTop > 0 ? elements.fadeIn(500) : elements.fadeOut(500)
    })
}

// 设置头像
function setAvatar() {
    const avatar = opts.theme.avatar
    if (avatar === '') {
        return false
    }
    $('#blogLogo').css({ 'background-image': `url(${avatar})` })
}

// 设置头部背景图
function setHeaderBackground() {
    const headerBackground = opts.theme.headerBackground
    if (headerBackground === '') {
        return false
    }
    $('#blogTitle').css({ 'background-image': `url(${headerBackground})` })
}

// 设置主题色
function setThemeColor() {
    const option = opts.theme.color
    let themeColor = ''
    if (option === 'random') {
        themeColor = getRandomRgba()
    } else {
        themeColor = option
    }
    $('head').append(`<style>:root{--ThemeColor: ${themeColor}}<style>`)
}

// 获取随机颜色
function getRandomRgba() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const a = 0.7
    return `rgba(${r},${g},${b},${a})`
}

// 指定icon插入svg
function iconInSvg(icon) {
    return `<svg class="icon" aria-hidden="true"><use xlink:href="${icon}"></use></svg>`
}

export { setBack2Top, setAvatar, setHeaderBackground, setThemeColor }
