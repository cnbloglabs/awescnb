export default () => {
    // 设置评论区头像
    $(document).ajaxComplete(function(event, xhr, option) {
        //评论头像
        if (option.url.indexOf('GetComments') > -1) {
            setTimeout(function() {
                window.owoEmoji()
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
                    $('.feedbackListSubtitle').addClass(
                        'feedbackListSubtitle_right',
                    )
                    $('.feedbackCon').addClass('feedbackCon_right')
                })

                //myscroll();
            }, 300)
        }
    })
}
