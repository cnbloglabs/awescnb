import { getGithubOptions } from 'options/extra'
import { avatar } from 'constants/cnblog'
import { getMessageCount } from 'utils/cnblog'
import { message } from 'constants/links'
// 构建header昵称
function headerNickname() {
    $('#Header1_HeaderTitle').text($('#profile_block a:first').text())
}

// header头像
function buildAva() {
    $('#blogLogo').attr('src', `${avatar}`)
}

function buildMessageCount() {
    $('#lnkBlogLogo')
        .append(`<a class="message-count" href="${message}"><span>${getMessageCount()}</span>
    </a>`)
}

// header移动端菜单
function headerBtn() {
    const ele = `<div id="navbarBurger" class="navbar-burger burger" data-target="navMenuMore">
      <span></span>
      <span></span>
      <span></span>
    </div>`
    $('#blogTitle').append(ele)
    $('#navbarBurger').click(function() {
        $(this).toggleClass('is-active')
        $('#navigator').toggleClass('is-active')
        $('#custom-searchbar').toggle()
        $('.postTitle svg').toggle()
    })
}

// 构建搜索框
function buildSearchbar() {
    const ele = `<input id="q" class="custom-searchbar" type="search" placeholder="Search by pressing enter" onkeydown="return zzk_go_enter(event);"/>`
    $('#navigator').after(ele)
}

// GitHub 图标
function buildGithub() {
    const { url } = getGithubOptions()
    const ele = `
    <li>
        <a id="custom-gtihub" href="${url}">Github</a>
    </li>`
    $('#navList').append(ele)
}

// header右侧按钮容器
// const buildHeader = () => {
//     const gitee = window.opts.gitee

//     $('#navList').after(`<div class="navbar-end"></div>`)
//     $('#blog_nav_newpost').appendTo('.navbar-end')

//     const customEle = `<a href="https://guangzan.gitee.io/awescnb-docs/docs/dev" id="header-awescnb">构建新皮肤</a>`
//     const giteeEle = `<a href="${gitee.url}" id="header-gitee">开源主页</a>`
//     $(customEle).appendTo('.navbar-end')
//     $(giteeEle).appendTo('.navbar-end')
// }

// 创建自定义图标容器及其图标
// const customLinks = () => {
//     const github = window.opts.github
//     const gitee = window.opts.gitee
//     // wrap
//     $('.navbar-end').prepend(`<div class="custom-links"></div>`)
//     $('#blogTitle h2').after(`<div class="custom-links"></div>`)

//     // 码云
//     if (gitee.enable) {
//         $('.custom-links').append(`<a class="gitee" href="${gitee.url}"></a>`)
//     }
//     // github icon
//     if (github.enable) {
//         $('.custom-links').append(`<a class="github" href="${github.url}"></a>`)
//     }
//     // 知乎
//     $('.custom-links').append(`<a class="zhihu"></a>`)
// }

export default () => {
    headerNickname()
    // buildHeader()
    buildAva()
    headerBtn()
    // customLinks()
    // headerInnerPostTitle()
    buildSearchbar()
    buildGithub()
    buildMessageCount()
}
