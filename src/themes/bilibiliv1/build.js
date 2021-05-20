import { getThemeOptions } from 'options/extra'

// 返回顶部
function setBack2Top() {
    let elements = $(`<div id="back2Top">🚀</div>`)
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
    const { avatar } = getThemeOptions()
    if (avatar === '') return
    $('#blogLogo').css({
        'background-image': `url(${avatar})`,
    })
}

// 设置头部背景图
function setHeaderBackground() {
    const { headerBackground } = getThemeOptions()
    if (headerBackground === '') return
    $('#blogTitle').css({
        'background-image': `url(${headerBackground})`,
    })
}

// 设置主题色
function setThemeColor() {
    const { color } = getThemeOptions()
    let themeColor = ''
    if (color === 'random') {
        themeColor = getRandomRgba()
    } else {
        themeColor = color
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

export default () => {
    setBack2Top()
    setAvatar()
    setHeaderBackground()
    setThemeColor()
}
