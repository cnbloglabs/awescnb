import './index.scss'
import { userAgent } from 'utils/helpers'

/**
 * 构建移动端菜单
 */
function buildMobileMenu() {
    const el = $(`<div>`).addClass('mobile-menu')

    $('#left-side')
        .clone()
        .appendTo(el)

    $('#sideBar')
        .clone()
        .appendTo(el)

    $('body').append(el)
    $('.mobile-menu #catalog').remove()
}

/**
 * 构建头部菜单按钮
 */
function buildHeaderTrigger() {
    const el = `<div id="navbarBurger" class="navbar-burger burger" data-target="navMenuMore"><span></span> <span></span><span></span></div>`
    $(el)
        .appendTo('#custom-searchbar')
        .click(function() {
            $(this).toggleClass('is-active')
            $('.mobile-menu').toggleClass('is-active')
        })
}

export default () => {
    if (userAgent() === 'pc') return
    buildMobileMenu()
    buildHeaderTrigger()
}
