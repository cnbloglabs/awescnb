// 评论事件
import toast from '@plugins/toast'
import './index.scss'

const commentManager = window.commentManager

function showAvatar() {
    const script = `<script id='showAvatar'>window.awesCommentsAvatar()</script>`
    $('body').append(script)
    setTimeout(() => {
        $('#showAvatar').remove()
    }, 1000)
}

async function submit() {
    $('#btn_comment_submit').click(function() {
        toast('感谢评论 🍺')
        commentManager.renderComments(0)
    })
}

async function del() {
    $('.comment_actions a:nth-child(2)').click(function() {
        toast('删除成功 ✔')
        commentManager.renderComments(0)
    })
}

function comments() {
    submit().then(() => {
        showAvatar()
    })
    del().then(() => {
        showAvatar()
    })
}

export default comments
