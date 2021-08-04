import { isPostDetailsPage } from 'utils/cnblog'

// 侧边悬浮按钮
function toHeader() {
    $('html,body')
        .finish()
        .animate(
            {
                scrollTop: '0px',
            },
            500,
        )
}

function toggleSidebar() {
    $('#sideBarMain').toggleClass('sidebar-show')
    //$('.float-btn li:not(.btn-sidebar)').toggle();
    $('#sideBarMain>div:not(#sidebar_scroller)').show()
    $('#sidebar_scroller').hide()
}

function toggleMain() {
    $('#sideBarMain>*:not(#sidebar_scroller)').show()
    $('#main').toggleClass('main-hide')
    $('#sidebar_scroller').hide()
}

function build() {
    $('#home').append(
        `<div class="float-btn"><ul>
            <li class="btn-top"><a></a></li>
            <li class="btn-sidebar"><a></a></li>
            <li class="btn-main"><a></a></li>
            </ul></div>`,
    )
}

function click() {
    $('.btn-top').click(toHeader)
    $('.btn-sidebar').click(toggleSidebar)
    $('.btn-main').click(toggleMain)
}

function SideFloatBtns() {
    if (!isPostDetailsPage()) {
        toggleMain()
    }
    build()
    click()
}

export default SideFloatBtns
