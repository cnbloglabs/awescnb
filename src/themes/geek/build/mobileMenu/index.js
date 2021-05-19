import './index.scss'
// import {
//     // userAgent,
//     // unpass
// } from 'utils/helpers'

/**
 * 构建移动端菜单
 */
const buildMobileMenu = () => {
    const el = `
        <div class="mobile-menu"></div>
    `
    $('body').append(el)
    $('#left-side')
        .clone()
        .appendTo('.mobile-menu')
    $('#sideBar')
        .clone()
        .appendTo('.mobile-menu')
}

/**
 * 构建头部菜单按钮
 */
const buildHeaderTrigger = () => {
    const el = `<div id="navbarBurger" class="navbar-burger burger" data-target="navMenuMore">
      <span></span>
      <span></span>
      <span></span>
    </div>`
    $(el)
        .appendTo('#custom-searchbar')
        .click(function() {
            $(this).toggleClass('is-active')
            $('.mobile-menu').toggleClass('is-active')
        })
}

function mobileMenu() {
    // if (userAgent() !== 'phone') return
    buildMobileMenu()
    buildHeaderTrigger()
}

export default mobileMenu
