// import icons from '../constants/icons'
// import { pageName } from '@tools'
// import { getRandomFoodicons, iconInSvg } from '../tools'

// function build() {
//     if (pageName() !== 'post') return
//     // 随笔内容
//     $('#home').before(
//         `<section id="post-wrap">${$(
//             '#cnblogs_post_body',
//         ).prop('outerHTML')}</section>`,
//     )
//     // 随笔底部分类、标签、日期、阅读数、编辑按钮、收藏按钮、好文要顶、关注按钮
//     let postCategory = ''
//     let postMark = ''
//     $('#BlogPostCategory a').each(function() {
//         postCategory += $(this).prop('outerHTML')
//     })
//     $('#EntryTag a').each(function() {
//         postMark += $(this).prop('outerHTML')
//     })
//     const postDate = $('#post-date').text()
//     const postViewCount = $('#post_view_count').text()
//     const editBtn = $('.postDesc> :nth-child(5)').prop(
//         'outerHTML',
//     )
//     const collectBtn = $('.postDesc a:last').prop(
//         'outerHTML',
//     )
//     const likeBtn = $('#green_channel_digg').prop(
//         'outerHTML',
//     )
//     const followBtn = $('#green_channel_follow').prop(
//         'outerHTML',
//     )
//     const $postDetails = `<div id="post-details">
//                               <div id='post-date'>${iconInSvg(
//                                   icons.date,
//                               )}<span>${postDate}</span></div>
//                               <div id='post-category'>${iconInSvg(
//                                   icons.catalog,
//                               )}${postCategory}</div>
//                               <div id='post-mark'>${iconInSvg(
//                                   icons.mark,
//                               )}${postMark}</div>
//                               <div id='post-view'>${iconInSvg(
//                                   getRandomFoodicons(),
//                               )}<span>${postViewCount}</span></div>
//                               <div id='post-edit'>${iconInSvg(
//                                   getRandomFoodicons(),
//                               )}${editBtn}</div>
//                               <div id='post-collect'>${iconInSvg(
//                                   getRandomFoodicons(),
//                               )}${collectBtn}</div>
//                               <div id='post-like'>${iconInSvg(
//                                   getRandomFoodicons(),
//                               )}${likeBtn}</div>
//                               <div id='post-follow'>${iconInSvg(
//                                   getRandomFoodicons(),
//                               )}${followBtn}</div>
//                             </div>`

//     $('#post-wrap').append($postDetails)
//     // 上一篇  下一篇
//     const prePost = $(
//         '#post_next_prev a:nth-child(2)',
//     ).prop('outerHTML')
//     const nextPost = $(
//         '#post_next_prev a:nth-child(5)',
//     ).prop('outerHTML')
//     let $preNextElements = ''
//     $preNextElements = `<section id="post-pre-next">
//                                 <div id='post-pre' style="visibility:${
//                                     prePost !== undefined
//                                         ? 'visible'
//                                         : 'hidden'
//                                 }">${iconInSvg(
//         icons.pre,
//     )}${prePost}</div>
//                                 <div id='post-next' style="visibility:${
//                                     nextPost !== undefined
//                                         ? 'visible'
//                                         : 'hidden'
//                                 }">${iconInSvg(
//         icons.next,
//     )}${nextPost}</div>
//                             </section>`
//     $('#post-details').after($preNextElements)
// }

function postPage() {
    // console.log(build)
    // build()
}

export default postPage
