// 在随笔详情页顶部随笔生成一个文章头图
// 引入即可
import { randomImgurl, randomArrayElements } from 'utils/helpers'
import { isPostDetailsPage } from 'utils/cnblog'
import { postTopimageConfig } from 'options/plugins'

export default (theme, devOptions) => {
    const { enable, imgs, fixed } = postTopimageConfig(devOptions)

    if (!enable) return
    if (!isPostDetailsPage()) return

    const url =
        imgs.length === 0 ? randomImgurl() : randomArrayElements(imgs, 1)[0]
    const ele = `<a  href="${url}" target="blank"><div id="custom-post-topimage"></div></a>`
    const style = {
        'background-image': `url(${url})`,
    }

    if (fixed) style['background-attachment'] = 'fixed'
    $('.post>.postTitle').before(ele)
    $('#custom-post-topimage').css(style)
}
