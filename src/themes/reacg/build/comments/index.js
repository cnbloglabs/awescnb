// 评论事件
import toast from '@plugins/toast'
import './index.scss'

const commentManager = window.commentManager
const awesCommentsAvatar = window.awesCommentsAvatar

function submit() {
    $('#btn_comment_submit').click(() => {
        toast('感谢评论 🍺')
        commentManager.renderComments(0)
        awesCommentsAvatar()
    })
}

function del() {
    $('.comment_actions a:nth-child(2)').click(() => {
        toast('删除成功 ✔')
        commentManager.renderComments(0)
        awesCommentsAvatar()
    })
}

function comments() {
    submit()
    del()
}

export default comments
