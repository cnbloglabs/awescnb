// 设置图片灯箱
// 仅引入即可

import './index.css'
import { pageName, poll } from '@/assets/utils/tools'
import baguetteBox from '../../../node_modules/baguettebox.js/dist/baguetteBox'
import '../../../node_modules/baguettebox.js/dist/baguetteBox.css'

const options = window.opts.imagebox

function buildPostDetail() {
    const imgList = $('#cnblogs_post_body img')
    if (imgList === 0) return
    $.each(imgList, i => {
        const item = $(imgList[i])
        // const flag = item.attr('id')
        // if (typeof flag === 'undefined' && item.outerWidth() > 50) {
        //     item.wrap(
        //         "<a class='lightbox' href='" + item.attr('src') + "'></a>",
        //     )
        // }
        item.wrap(`<a class='lightbox-post' href='${item.attr('src')}'></a>`)
    })
    baguetteBox.run('.lightbox-post')
}

function buildCommentsList() {
    const imgList = $('.feedbackCon img')
    if (imgList === 0) return
    $.each(imgList, i => {
        const item = $(imgList[i])
        item.wrap(
            `<a class='lightbox-comments' href='${item.attr('src')}'></a>`,
        )
    })
    baguetteBox.run('.lightbox-comments', {
        animation: 'fadeIn',
    })
}

// 轮询评论区
function pollToShow() {
    if (pageName() !== 'post') return
    poll($('.blog_comment_body').length, buildCommentsList)
}

function imagebox() {
    if (!options.enable) return
    if (pageName() !== 'post') return
    buildPostDetail()
    pollToShow()
}
export default imagebox
