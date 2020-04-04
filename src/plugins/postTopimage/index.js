// 在随笔详情页顶部随笔生成一个文章头图
// 引入即可
import { pageName, randomArrayElements } from '@tools'
import { randomImage } from '@constants/urls'
import './index.css'

const { enable, urls } = window.opts.postTopimage

function postTopimage() {
    if (!enable) return
    if (pageName() !== 'post') return
    let url = urls.length === 0 ? randomImage : randomArrayElements(urls, 1)[0]
    const ele = `<div id="custom-post-topimage"></div>`
    $('.post>.postTitle').after(ele)
    $('#custom-post-topimage').css('background-image', `url(${url})`)
}

export default postTopimage
