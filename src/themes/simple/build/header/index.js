import './index.scss'
import { pageName, userAgent } from '@tools'

// header右侧按钮容器
const buildHeader = () => {
    const gitee = window.opts.gitee
    $('#navList').after(`<div class="navbar-end"></div>`)
    $('#blog_nav_newpost').appendTo('.navbar-end')
    $(
        `<a href="https://guangzan.gitee.io/awescnb-docs/" id="header-awescnb">使用 awescnb 构建皮肤</a>`,
    ).appendTo('.navbar-end')
    $(`<a href="${gitee.url}" id="header-gitee">开源主页</a>`).appendTo(
        '.navbar-end',
    )
}

// header头像
const buildAva = () => {
    const { avatar } = window.opts.theme
    $('#blogLogo').attr('src', `${avatar}`)
}

// 随笔页构建文章题目
const headerInnerPostTitle = () => {
    if (pageName() !== 'post') return
    if (userAgent() !== 'pc') return
    let title =
        '你你好你好你你你好你好你好你好你好好你好你好' ||
        $('.post .postTitle')
            .text()
            .replace(/\s*/g, '')
    const titleLength = title.length

    let offset = ''
    if (0 <= titleLength && titleLength < 10) offset = '-200%'
    if (10 <= titleLength && titleLength < 18) offset = '-100%'
    if (titleLength >= 18) {
        title = title.substring(0, 18) + '...'
        offset = '-100%'
    }
    $('#navList').append(`<span class='header-posttitle'>${title}</span>`)
    $('head').append(
        `<style>
               .header-posttitle {transform: translate3d(${offset}, 300%, 0);}
                #header.is-active .header-posttitle {transform: translate3d(${offset}, 0, 0);}
        </style>`,
    )
}

// header移动端菜单
const headerBtn = () => {
    const ele = `<div id="navbarBurger" class="navbar-burger burger" data-target="navMenuMore">
      <span></span>
      <span></span>
      <span></span>
    </div>`
    $('#blogTitle').append(ele)
    $('#navbarBurger').click(function() {
        $(this).toggleClass('is-active')
        $('#navigator').toggleClass('is-active')
    })
}

// 创建自定义图标容器及其图标
const customLinks = () => {
    const github = window.opts.github
    // wrap
    $('.navbar-end').prepend(`<div class="custom-links"></div>`)
    $('#blogTitle h2').after(`<div class="custom-links"></div>`)
    // github icon
    if (github.enable) {
        $('.custom-links').append(`<a class="github" href="${github.url}"></a>`)
    }
    // qq
    // $('.custom-links').append(`<a class="qq"></a>`)
    // 知乎
    $('.custom-links').append(`<a class="zhihu"></a>`)
}

// 首页 header 不要上下翻滚
const preventHeaderChange = () => {
    if (pageName() !== 'index') return
    $('#header').addClass('navlist-fix')
}

const header = () => {
    buildHeader()
    buildAva()
    headerBtn()
    customLinks()
    headerInnerPostTitle()
    preventHeaderChange()
}

module.exports = header
