// 在随笔详情页顶部随笔生成一个文章头图
// 引入即可
import {
    randomImgurl,
    pageName,
    randomArrayElements,
} from '@tools'
import { postTopimageConfig } from '@config/plugins'

export default devOptions => {
    const { enable, imgs, fixed } = postTopimageConfig(
        devOptions,
    )

    if (!enable) return
    if (pageName() !== 'post') return

    const url =
        imgs.length === 0
            ? randomImgurl()
            : randomArrayElements(imgs, 1)[0]
    const ele = `<a  href="${url}" target="blank"><div id="custom-post-topimage"></div></a>`
    const style = {
        'background-image': `url(${url})`,
    }

    if (fixed) style['background-attachment'] = 'fixed'
    $('.post>.postTitle').before(ele)
    $('#custom-post-topimage').css(style)
}
