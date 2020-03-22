import { userAgent } from '@/assets/utils/tools'

// 设置移动端菜单按钮
function mobileMenu() {
    if (userAgent() !== 'phone') return
    $('body').append(
        `<section id='side-btn-wrap'>
                    <div id='side-btn'>
                        <div id='side-btn-burger'></div>
                    </div>
                </section>`,
    )
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
        } else {
            $(this).addClass('side-btn-active')
            $('#sideBar').css({
                visibility: 'visible',
                'clip-path': 'circle(100% at 50% 50%)',
                transition: 'all .3s ease-in-out',
            })
        }
    })
}

export default mobileMenu
