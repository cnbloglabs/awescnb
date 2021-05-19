// 在随笔详情页尾部图片
import { getCurrentPage } from 'utils/cnblog'
import { postBottomimageConfig } from 'options/plugins'

export default (theme, devOptions) => {
    const { enable, img, height } = postBottomimageConfig(devOptions)

    if (!enable) return
    if (getCurrentPage() !== 'post') return
    if (img === '') return

    const ele = `<div id="custom-post-bottomimage"></div>`
    const style = {
        'background-image': `url(${img})`,
    }
    if (height !== '') style['height'] = height
    $('#cnblogs_post_body').after(ele)
    $('#custom-post-bottomimage').css(style)
}
