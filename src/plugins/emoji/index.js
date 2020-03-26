// 评论输入表情
// state: dev

const opts = window.opts.emoji

function build() {
    if (!opts) return
    $(document).ready(function() {
        $('#tbCommentBody').emojioneArea()
    })
}

function emoji() {
    build()
}

export default emoji
