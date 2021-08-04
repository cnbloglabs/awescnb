import { loadScript } from 'utils/helpers'
import { clipboard, fancybox } from '../libs'

export default () => {
    /*评论模块的滚动隐藏效果*/
    var windowTop = 0
    $(window).scroll(function() {
        var scrolls = $(this).scrollTop()
        if (scrolls >= windowTop) {
            //当scrolls>windowTop时，表示页面在向下滑动
            //$('#header').addClass('header-hide');
            $('.float-btn').addClass('float-btn-hide')
            windowTop = scrolls
        } else {
            //$('#header').removeClass('header-hide');
            $('.float-btn').removeClass('float-btn-hide')
            windowTop = scrolls
        }
    })

    // 博文
    if ($('#topics').length > 0) {
        $('.btn-top').after(
            '<li class="btn-comment"><a href="#commentform_title"></a></li>',
        )
        $('#main').toggleClass('main-hide')
        $('.btn-main').addClass('btn-main-open')

        //高亮
        $('pre code').each(function(i, block) {
            window.hljs.highlightBlock(block)
        })

        // 表格滚动
        $('table').each(function() {
            $(this).css('cssText', 'width:100%!important;display:table;')
            $(this).wrapAll('<div class="tablebox"></div>')
            $('.tablebox').css('overflow', 'auto')
        })

        // 新窗口打开
        $('#cnblogs_post_body a[href^="http"]').each(function() {
            $(this).attr('target', '_blank')
        })

        // fancybox
        loadScript(fancybox, () => {
            $('.cnblogs-markdown img').each(function() {
                var element = document.createElement('a')
                $(element).attr('data-fancybox', 'gallery')
                $(element).attr('href', $(this).attr('src'))
                $(element).attr('data-caption', $(this).attr('alt'))
                $(this).wrap(element)
                if ($(this).attr('alt') != '') {
                    $(this)
                        .parent()
                        .after(
                            '<div class="img-caption">' +
                                $(this).attr('alt') +
                                '</div>',
                        )
                }
            })
        })

        loadScript(clipboard, () => {
            // 代码复制
            for (let i = 0; i <= $('pre').length; i++) {
                $('pre')
                    .eq(i)
                    .wrapAll('<div class="copyItem"></div>')
                $('.copyItem').css('position', 'relative')
                $('pre')
                    .eq(i)
                    .before(
                        '<div class="clipboard-button" id="copy_btn_' +
                            i +
                            ' " data-clipboard-target="#copy_target_' +
                            i +
                            '"title="复制"></div>',
                    )
                $('pre')
                    .eq(i)
                    .attr('id', 'copy_target_' + i)
            }

            $('pre code').each(function() {
                var lines =
                    $(this)
                        .text()
                        .split('\n').length - 1
                var $numbering = $('<ul/>').addClass('pre-numbering')
                $(this)
                    .addClass('has-numbering')
                    .parent()
                    .append($numbering)
                for (let i = 1; i <= lines; i++) {
                    $numbering.append($('<li/>').attr('data-number', i))
                }
            })

            var clipboard = new window.ClipboardJS('.clipboard-button')
            clipboard.on('success', function(e) {
                e.trigger.innerHTML = '成功'
                setTimeout(function() {
                    e.trigger.innerHTML = ''
                }, 2 * 1000)
                e.clearSelection()
            })
            clipboard.on('error', function(e) {
                e.trigger.innerHTML = '失败'
                setTimeout(function() {
                    e.trigger.innerHTML = ''
                }, 2 * 1000)
                e.clearSelection()
            })
        })
    }
}
