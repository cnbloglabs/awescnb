import { isPostDetailsPage } from 'utils/cnblog'

// function toggleMain() {
//     $('#sideBarMain>*:not(#sidebar_scroller)').show()
//     $('#main').toggleClass('main-hide')
//     $('#sidebar_scroller').hide()
// }

// 新窗口打开
function openInNewWindow() {
    $('#cnblogs_post_body a[href^="http"]').each(function() {
        $(this).attr('target', '_blank')
    })
}

// 表格滚动
function tableScroll() {
    $('table').each(function() {
        $(this).css('cssText', 'width:100%!important;display:table;')
        $(this).wrapAll('<div class="tablebox"></div>')
        $('.tablebox').css('overflow', 'auto')
    })
}

function postpageInit() {
    if (!isPostDetailsPage()) return
    // toggleMain()
    openInNewWindow()
    tableScroll()
}

export default postpageInit
