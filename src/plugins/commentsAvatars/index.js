// 显示评论列表头像
import { pageName } from '@tools'
import env from '@constants/env'

function build() {
    $('.feedbackItem').each(function() {
        let avatar = $(this)
            .children('.feedbackCon')
            .children('span:last')
            .html()
        avatar = avatar
            ? avatar.replace('http://', 'https://')
            : 'https://pic.cnblogs.com/face/sample_face.gif'
        if (env === 'dev') avatar = 'https://www.dummyimage.com/50'
        const ele = `<div class='custom-comment-avatar'><img src="${avatar}" class='avatar' /></div>`
        $(this)
            .children('.feedbackCon')
            .prepend(ele)
    })
}

function show() {
    if (pageName() !== 'post') return
    $(document).ajaxComplete(function(event, xhr, option) {
        if (option.url.indexOf('GetComments') <= -1) return
        setTimeout(function() {
            build()
        }, 300)
    })
}

// 调整支持反对按钮位置
function support() {
    $('.comment_vote').each(function() {
        $(this).appendTo(
            $(this)
                .parent()
                .siblings('.feedbackListSubtitle'),
        )
    })
}

// 作者回复靠右
function authorRight() {
    $('.feedbackItem').each(function() {
        const isAuthor =
            $(this)
                .find('.louzhu')
                .text() === '楼主'
                ? true
                : false
        if (isAuthor) $(this).addClass('custom-comments-author')
    })
}

function commentsAvatar() {
    show()
    support()
    authorRight()
}

window.awesCommentsAvatar = commentsAvatar

export default commentsAvatar
