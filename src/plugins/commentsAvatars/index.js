import { pageName, poll } from '@tools'
import env from '@constants/env'

/**
 * 构建头像
 */
function buildAvatars() {
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

/**
 * 调整支持反对按钮位置
 */
function moveSupport() {
    $('.comment_vote').each(function() {
        $(this).appendTo(
            $(this)
                .parent()
                .siblings('.feedbackListSubtitle'),
        )
    })
}

/**
 * 作者回复靠右
 */
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

/**
 * 组合
 */
function build() {
    buildAvatars()
    moveSupport()
    authorRight()
}

/**
 * 监听 ajax
 */
function listener() {
    window.renderCommentsAvatars = build
    setTimeout(() => {
        $(document).ajaxComplete(function(event, xhr, option) {
            if (
                option.url.indexOf('PostComment/Add') > -1 ||
                option.url.indexOf('DeleteComment') > -1
            ) {
                new window.blogCommentManager().renderComments(0)
            }
        })
        $(document).ajaxComplete(function(event, xhr, option) {
            if (option.url.indexOf('GetComments') > -1) {
                window.renderCommentsAvatars()
                window.buildEmojis()
                window.imagebox()
            }
        })
    }, 0)
    poll($('.feedbackItem').length, build)
}

/**
 * 导出
 */
function commentsAvatar() {
    if (pageName() !== 'post') return
    env === 'dev' ? build() : listener()
}

export default commentsAvatar
