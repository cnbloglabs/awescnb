import { loadScript } from 'utils/helpers'
import { isPostDetailsPage } from 'utils/cnblog'
import { bootstrap } from '../../urls'

function toggleContent() {
    //$('.float-btn li:not(.btn-content)').toggle();
    $('#sidebar_scroller').show()
    $('#main').toggleClass('main-hide')
    $('#sideBarMain').toggleClass('sidebar-show')
    $('#sideBarMain>div:not(#sidebar_scroller)').hide()
}

//开启滚动监听, 监听所有在.nav类下的li
function scrollspy() {
    loadScript(bootstrap, function() {
        $('body').scrollspy()
    })
}

// 侧边目录
function build() {
    //先获取第一个h标签, 之后循环时作为上一个h标签
    var $ph = $('#cnblogs_post_body :header:eq(0)')
    if ($ph.length > 0) {
        $('.btn-sidebar').before('<li class="btn-content"><a></a></li>')
        $('.btn-content a').click(toggleContent)
        //     $('#sideBarMain').remove();
        //设置层级为1
        $ph.attr('offset', '1')
        //添加导航目录的内容
        $('#sideBarMain').prepend(
            '<div id="sidebar_scroller" class="sidebar-block"><h3 class="catListTitle">导航目录</h3><ul class="nav"></ul></div>',
        )
        //取当前边栏的宽度
        //$('#sidebar_scroller').css('width', ($('#sideBarMain').width()) + 'px');
        //让导航目录停留在页面顶端
        //  $('#sidebar_scroller').stickUp();
        //遍历文章里每个h标签
        $('#cnblogs_post_body :header').each(function(i) {
            var $h = $(this)
            //设置h标签的id, 编号从0开始
            $h.attr('id', 'scroller-' + i)
            //比上一个h标签层级小, 级数加1
            if ($h[0].tagName > $ph[0].tagName) {
                $h.attr('offset', parseInt($ph.attr('offset')) + 1)
            } //比上一个h标签层级大, 级数减1
            else if ($h[0].tagName < $ph[0].tagName) {
                var h = parseInt($h[0].tagName.substring(1))
                var ph = parseInt($ph[0].tagName.substring(1))

                var offset = parseInt($ph.attr('offset')) - (ph - h)
                if (offset < 1) {
                    offset = 1
                }
                $h.attr('offset', offset)
            } //和上一个h标签层级相等时, 级数不变
            else {
                $h.attr('offset', $ph.attr('offset'))
            }
            //添加h标签的目录内容
            $('#sidebar_scroller ul').append(
                '<li class="scroller-offset' +
                    $h.attr('offset') +
                    '"><a href="#scroller-' +
                    i +
                    '">' +
                    $h.text() +
                    '</a></li>',
            )
            //最后设置自己为上一个h标签
            $ph = $h
        })

        /*当前目录激活监听*/
        $(window).scroll(function() {
            var now = $('#sidebar_scroller').find('.active')
            var prevNum = now.prevAll().length + 1
            var basicHeight = now.outerHeight()
            $('.nav').scrollTop(prevNum * basicHeight - 14)
        })
    }
}

function catalog() {
    if (!isPostDetailsPage()) return
    build()
    scrollspy()
}

export default catalog
