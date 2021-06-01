// 评论事件
import toast from 'plugins/toast'
import './index.scss'

// const commentManager = window.commentManager
// const awesCommentsAvatar = window.awesCommentsAvatar

function submit() {
    $('#btn_comment_submit').click(function() {
        if ($('#tbCommentBody').val().length === 0) return
        toast('感谢评论 🍺')
        // window.commentManager.renderComments(0)
        // window.awesCommentsAvatar()
    })
}

function del() {
    $('.comment_actions a:nth-child(2)').click(function() {
        toast('删除成功 ✔')
        // window.commentManager.renderComments(0)
        // window.awesCommentsAvatar()
    })
}

function comments() {
    submit()
    del()
}

export default comments
