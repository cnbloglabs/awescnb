import AwesCnb from '@/themes/awescnb'
import './index.css'

const opts = window.opts
const urls = {
    script: {
        icon: '//at.alicdn.com/t/font_1416496_14nsmkubys8.js',
    },
    repositories: window.rep,
}
const icons = {
    back2top: '#ac-back2top', //返回顶部
}

class Gshang extends AwesCnb {
    constructor() {
        super()
        super.init()
        this.init()
    }

    init() {
        $.getScript(urls.script.icon)
        this.setThemeColor()
        this.setAvatar()
        this.setHeaderBackground()
        this.setBack2Top()
        this.hideLoading()
    }

    // 返回顶部
    setBack2Top() {
        const option = opts.back2top
        if (!option.enable) {
            return
        }
        const svg = this.iconInSvg(icons.back2top)
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
    setAvatar() {
        const avatar = opts.theme.avatar
        if (avatar === '') {
            return false
        }
        $('#blogLogo').css({ 'background-image': `url(${avatar})` })
    }

    // 设置头部背景图
    setHeaderBackground() {
        const headerBackground = opts.theme.headerBackground
        if (headerBackground === '') {
            return false
        }
        $('#blogTitle').css({ 'background-image': `url(${headerBackground})` })
    }

    // 设置主题色
    setThemeColor() {
        const option = opts.theme.color
        let themeColor = ''
        if (option === 'random') {
            themeColor = this.getRandomRgba()
        } else {
            themeColor = option
        }
        $('head').append(`<style>:root{--ThemeColor: ${themeColor}}<style>`)
    }

    // 获取随机颜色
    getRandomRgba() {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const a = 0.7
        return `rgba(${r},${g},${b},${a})`
    }

    // 隐藏loading
    hideLoading() {
        $('#loading').fadeOut()
    }
    
    // 指定icon插入svg
    iconInSvg(icon) {
        return `<svg class="icon" aria-hidden="true"><use xlink:href="${icon}"></use></svg>`
    }
}

new Gshang()
