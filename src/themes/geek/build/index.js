import { pageName } from '@tools'

const removeClearel = () => {
    $('.clear').remove()
}

const moveFooterToMain = () => {
    $('#footer').appendTo('#main')
}

const submitComment = () => {
    if (pageName() !== 'post') return
    $(document).on('click', '#btn_comment_submit', function() {
        new window.blogCommentManager().renderComments(0)
    })
    $('#btn_comment_submit').click(() => {
        new window.blogCommentManager().renderComments(0)
    })
}

const build = () => {
    removeClearel()
    moveFooterToMain()
    submitComment()
    require('./indexCards')()
    require('./header')()
    require('./rightSide')()
    require('./searchbar')()
    require('./profile')()
    require('./leftSide')()
}

module.exports = build
