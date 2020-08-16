import { pageName } from '@tools'

const removeClearel = () => {
    $('.clear').remove()
}

const moveFooterToMain = () => {
    $('#footer').appendTo('#main')
}

const submitComment = () => {
    if (pageName() !== 'post') return
    $('#btn_comment_submit').click(function() {
        new window.blogCommentManager().renderComments(0)
        window.renderCommentsAvatars()
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
