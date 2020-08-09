// 在随笔详情页尾部图片
import { pageName } from '@tools'

function postBottomimage() {
    const { enable, img, height } = window.opts.postBottomimage

    if (!enable) return
    if (pageName() !== 'post') return
    if (img === '') return

    const ele = `<div id="custom-post-bottomimage"></div>`
    const style = {
        'background-image': `url(${img})`,
    }
    if (height !== '') style['height'] = height
    $('#cnblogs_post_body').after(ele)
    $('#custom-post-bottomimage').css(style)
}

export default postBottomimage
