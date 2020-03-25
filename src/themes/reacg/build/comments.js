import { pageName } from '@/assets/utils/tools'
import env from '@constants/env'

// 显示评论列表头像
function showAvatar() {
    $('.feedbackItem').each(function() {
        let avatar = $(this)
            .children('.feedbackCon')
            .children('span:last')
            .html()

        if (env) {
            avatar = 'https://www.dummyimage.com/50'
        } else {
            avatar = avatar
                ? avatar.replace('http://', 'https://')
                : 'https://pic.cnblogs.com/face/sample_face.gif'
        }

        $(`<img src="${avatar}" class='avatar' />`).prependTo(
            $(this).children('.feedbackCon'),
        )
    })
}

// 轮询显示头像
function poll() {
    if (pageName() !== 'post') return
    if ($('.feedbackItem').length === 0) return

    if ($('.feedbackItem').length) {
        showAvatar()
    } else {
        let count = 1

        let intervalId = setInterval(() => {
            if ($('.feedbackItem').length) {
                clearInterval(intervalId)
                showAvatar()
            }
            if (count === 15) {
                clearInterval(intervalId)
            }
            count++
        }, 500)
    }
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

        if (isAuthor) {
            $(this).addClass('custom-comments-author')
        }
    })
}

function comments() {
    poll()
    support()
    authorRight()
}

export default comments
