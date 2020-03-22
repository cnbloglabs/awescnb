import { pageName } from '@/assets/utils/tools'

// 显示评论列表头像
function setCommentListAvatars() {
    if (pageName() !== 'post') return
    if ($('.feedbackItem').length === 0) return
    
    const show = () => {
        $('.feedbackItem').each(function() {
            let avatar = $(this)
                .children('.feedbackCon')
                .children('span:last')
                .html()

            avatar = avatar
                ? avatar.replace('http://', 'https://')
                : 'https://pic.cnblogs.com/face/sample_face.gif'

            $(`<img src=${avatar} class='avatar' />`).prependTo(
                $(this).children('.feedbackCon'),
            )
        })
    }

    if ($('.feedbackItem').length) {
        show()
    } else {
        let count = 1

        let intervalId = setInterval(() => {
            if ($('.feedbackItem').length) {
                clearInterval(intervalId)
                show()
            }
            if (count == 10) {
                clearInterval(intervalId)
            }
            count++
        }, 500)
    }
}

function comments() {
    setCommentListAvatars()
}

export default comments
