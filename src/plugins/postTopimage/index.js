// 在随笔详情页顶部随笔生成一个文章头图
// 引入即可
import { randomImgurl, pageName, randomArrayElements } from '@tools'
import './index.css'

function build() {
    const { enable, imgs, position, fixed } = window.opts.postTopimage

    if (!enable && pageName() !== 'post') return

    const url =
        imgs.length === 0 ? randomImgurl() : randomArrayElements(imgs, 1)[0]
    const ele = `<a  href="${url}" target="blank"><div id="custom-post-topimage"></div></a>`
    const style = {
        'background-image': `url(${url})`,
    }

    if (position === 'top') {
        $('.post>.postTitle').before(ele)
    }
    if (position === 'bottom') {
        $('#cnblogs_post_body').after(ele)
    }
    if (fixed) {
        style['background-attachment'] = 'fixed'
    }
    $('#custom-post-topimage').css(style)
}

function postTopimage() {
    build()
}

export default postTopimage
