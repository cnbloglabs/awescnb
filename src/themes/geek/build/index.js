// import { pageName } from '@tools'

const removeClearel = () => {
    $('.clear').remove()
}

const moveFooterToMain = () => {
    $('#footer').appendTo('#main')
}

// const delComment = () => {
//     $(document).ajaxComplete(function(event, xhr, option) {
//         if (option.url.indexOf('DeleteComment') > -1) {
//             new window.blogCommentManager().renderComments(0)
//         }
//     })
// }

// const submitComment = () => {
//     if (pageName() !== 'post') return
//     // $('#custom-submit').on('click', function() {
//     //     new window.blogCommentManager().renderComments(0)
//     // })
// }

const build = () => {
    removeClearel()
    // delComment()
    moveFooterToMain()
    // submitComment()
    require('./indexCards')()
    require('./header')()
    require('./rightSide')()
    require('./searchbar')()
    require('./profile')()
    require('./leftSide')()
}

module.exports = build
