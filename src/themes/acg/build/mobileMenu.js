import { unpass, userAgent } from '@tools'
import { clickToggle } from '../tools'
import headerElements from '../constants/headerElements'
// 移动端菜单
function build() {
    $('body').append(
        `<div id='side-btn-wrap'>
                <div id='side-btn'><div id='side-btn-burger'></div>
        </div>`,
    )
}

function menuToggle() {
    $('#side-btn').click(function() {
        event.preventDefault()
        if ($(this).hasClass('side-btn-active')) {
            $(this).removeClass('side-btn-active')
            $('#navigator').css({
                display: 'none',
                transition: 'all 500ms ease-in-out',
                'clip-path': 'circle(30px at calc(100%) 100%)',
            })
            unpass(true)
        } else {
            $(this).addClass('side-btn-active')
            $('#navigator').css({
                display: 'block',
                transition: 'all 300ms ease-in-out',
                'clip-path': 'circle(100%)',
            })
            unpass(false)
        }
    })
}

// mobile
function itemToggle() {
    if (userAgent() !== 'phone') return
    clickToggle(headerElements)
}

function mobileMenu() {
    if (userAgent() !== 'phone') return
    build()
    menuToggle()
    itemToggle()
}

export default mobileMenu
