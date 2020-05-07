// 评论事件
import toast from '@plugins/toast'
import './index.scss'

const commentManager = window.commentManager

function showAvatar() {
    const script = `<script>window.awesCommentsAvatar()</script>`
    $('body').append(script)
}

function submit() {
    $('document').on('click', '#btn_comment_submit', function() {
        toast('感谢评论 🍺')
        commentManager.renderComments(0)
        showAvatar()
    })
}

function del() {
    $('document').on('click', '.comment_actions a:nth-child(2)', function() {
        toast('删除成功 ✔')
        commentManager.renderComments(0)
        showAvatar()
    })
}

function comments() {
    submit()
    del()
}

export default comments
