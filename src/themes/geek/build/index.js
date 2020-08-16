import { pageName } from '@tools'

const removeClearel = () => {
    $('.clear').remove()
}

const moveFooterToMain = () => {
    $('#footer').appendTo('#main')
}

const submitComment = () => {
    if (pageName() !== 'post') return
    $('#btn_comment_submit').bind('click', function() {
        console.log('c')
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
