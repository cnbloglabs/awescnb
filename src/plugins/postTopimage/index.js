// 在随笔详情页顶部随笔生成一个文章头图
// 引入即可
import { pageName, randomArrayElements } from '@tools'
import { randomImage } from '@constants/urls'
import './index.css'

function postTopimage() {
    const { enable, imgs, position } = window.opts.postTopimage

    if (!enable) return
    if (pageName() !== 'post') return

    let url = imgs.length === 0 ? randomImage : randomArrayElements(imgs, 1)[0]

    const ele = `<div id="custom-post-topimage"></div>`
    if (position === 'top') {
        $('.post>.postTitle').before(ele)
    } else {
        $('#cnblogs_post_body').after(ele)
    }

    $('#custom-post-topimage').css('background-image', `url(${url})`)
}

export default postTopimage
