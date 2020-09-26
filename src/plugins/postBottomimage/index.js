// 在随笔详情页尾部图片
import { pageName } from '@tools'
import { postBottomimageConfig } from '@config/plugins'

export default devOptions => {
    const { enable, img, height } = postBottomimageConfig(
        devOptions,
    )

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
