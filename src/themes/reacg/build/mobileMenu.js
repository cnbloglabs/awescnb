// 设置移动端菜单按钮
import { userAgent,unpass } from '@tools'

function build() {
    $('body').append(
        `<div id='side-btn-wrap'>
                    <div id='side-btn'>
                        <div id='side-btn-burger'></div>
                    </div>
                </div>`,
    )
}

function toggle() {
    $('#side-btn').click(function() {
        event.preventDefault()
        if ($(this).hasClass('side-btn-active')) {
            $(this).removeClass('side-btn-active')
            $('#sideBar').css({
                visibility: 'hidden',
                'clip-path': 'circle(30px at calc(100%) 100%)',
                transition: 'all .5s ease-in-out',
            })
            setTimeout(() => {}, 500)
            unpass(true)
        } else {
            $(this).addClass('side-btn-active')
            $('#sideBar').css({
                visibility: 'visible',
                'clip-path': 'circle(100% at 50% 50%)',
                transition: 'all .3s ease-in-out',
            })
            unpass(false)
        }
    })
}

function mobileMenu() {
    if (userAgent() !== 'phone') return
    build()
    toggle()
}

export default mobileMenu
