// 在随笔详情页顶部随笔生成一个文章头图
// 引入即可
import { pageName, randomArrayElements } from '@tools'
import { randomImage } from '@constants/urls'
import './index.css'

const { enable, imgs } = window.opts.postTopimage

function postTopimage() {
    if (!enable) return
    if (pageName() !== 'post') return
    let url = imgs.length === 0 ? randomImage : randomArrayElements(imgs, 1)[0]
    const ele = `<div id="custom-post-topimage"></div>`
    $('.post>.postTitle').before(ele)
    $('#custom-post-topimage').css('background-image', `url(${url})`)
}

export default postTopimage
