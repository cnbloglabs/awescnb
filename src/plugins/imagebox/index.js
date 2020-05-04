// 设置图片灯箱
// 仅引入即可

import './index.css'
import { pageName, poll } from '@/assets/utils/tools'
// import baguetteBox from '../../../node_modules/baguettebox.js/dist/baguetteBox'
// import '../../../node_modules/baguettebox.js/dist/baguetteBox.css'
import mediumZoom from 'medium-zoom'

const options = window.opts.imagebox
const mediumZoomConfig = {
    scrollOffset: 0,
    background: 'rgba(0,0,0,0.3)',
}

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
        // item.wrap(`<a class='custom-zoom' href='${item.attr('src')}'></a>`)
        item.addClass('custom-zoom')
    })

    // baguetteBox.run('.custom-zoom')
    mediumZoom('.custom-zoom', mediumZoomConfig)
}

function buildCommentsList() {
    const imgList = $('.feedbackCon img')
    if (imgList === 0) return
    $.each(imgList, i => {
        const item = $(imgList[i])
        // item.wrap(`<a class='custom-zoom' href='${item.attr('src')}'></a>`)
        item.addClass('custom-zoom')
    })
    // baguetteBox.run('.custom-zoom', {
    //     animation: 'fadeIn',
    // })
    mediumZoom('.custom-zoom', mediumZoomConfig)
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
