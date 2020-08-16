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
        $(document).ajaxComplete(function(event, xhr, option) {
            if (option.url.indexOf('GetComments') > -1) {
                window.renderCommentsAvatars()
            }
        })
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
