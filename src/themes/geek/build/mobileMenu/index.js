import './index.scss'
import {
    userAgent,
    // unpass
} from '@tools'

/**
 * 构建移动端菜单
 */
const buildMobileMenu = () => {
    const el = `
        <div class="mobile-menu"></div>
    `
    $('body').append(el)
    $('#left-side').appendTo('.mobile-menu')
    $('#sideBar').appendTo('.mobile-menu')
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

// function build() {
//     $('body').append(
//         `<div id='side-btn-wrap'>
//                     <div id='side-btn'>
//                         <div id='side-btn-burger'></div>
//                     </div>
//                 </div>`,
//     )
// }

// function toggle() {
//     $('#side-btn').click(function() {
//         event.preventDefault()
//         if ($(this).hasClass('side-btn-active')) {
//             $(this).removeClass('side-btn-active')
//             $('#sideBar').css({
//                 visibility: 'hidden',
//                 'clip-path': 'circle(30px at calc(100%) 100%)',
//                 transition: 'all .5s ease-in-out',
//             })
//             setTimeout(() => {}, 500)
//             unpass(true)
//             $('html').css('scroll-behavior', 'smooth')
//         } else {
//             $(this).addClass('side-btn-active')
//             $('#sideBar').css({
//                 visibility: 'visible',
//                 'clip-path': 'circle(100% at 50% 50%)',
//                 transition: 'all .3s ease-in-out',
//             })
//             unpass(false)
//             $('html').css('scroll-behavior', 'unset')
//         }
//     })
// }

function mobileMenu() {
    if (userAgent() !== 'phone') return
    buildMobileMenu()
    buildHeaderTrigger()
    // build()
    // toggle()
}

module.exports = mobileMenu
