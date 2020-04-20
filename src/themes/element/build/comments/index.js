/////// 评论区相关 ////////

import { poll, pageName } from '@tools'

// 评论模块的滚动隐藏效果
function scroll2hide() {
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
}

// 显示评论区头像
function commentsAvator() {
    $.each($('.feedbackItem'), function(index, ele) {
        var self = $(ele)
        var obj = self.find('.blog_comment_body')
        var id = obj.attr('id').split('_')[2]
        var blog = self.find('a[id^="a_comment_author"]')
        var blogUrl = blog.attr('href')
        var imgSrc =
            $('#comment_' + id + '_avatar').html() ||
            'http://pic.cnblogs.com/avatar/simple_avatar.gif'
        self.prepend(
            '<a href="' +
                blogUrl +
                '"><img src="' +
                imgSrc +
                '" style="float:left;" class="comment_avatar"></a',
        )
        $('.feedbackListSubtitle').addClass('feedbackListSubtitle_right')
        $('.feedbackCon').addClass('feedbackCon_right')
    })

    // $(document).ajaxComplete(function(event, xhr, option) {
    //     //评论头像
    //     if (option.url.indexOf('GetComments') > -1) {
    //         setTimeout(function() {
    //             //myscroll();
    //         }, 300)
    //     }
    // })
}

// 轮询
function poll2show() {
    poll($('.blog_comment_body').length, commentsAvator)
}

function comments() {
    if (pageName() !== 'post') return
    poll2show()
    scroll2hide()
}

export default comments
