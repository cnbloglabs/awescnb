// 评论事件
import toast from '@plugins/toast'
import './index.scss'

// const commentManager = window.commentManager

function submit() {
    $('#btn_comment_submit').click(() => {
        toast('感谢评论 🍺')
        window.RefreshCommentList()
    })
}

function comments() {
    submit()
}

export default comments
