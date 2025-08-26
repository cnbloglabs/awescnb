// 在随笔详情页顶部随笔生成一个文章头图
import { usePostTopImageOptions } from '@acnb/options'
import { isPostDetailsPage } from '../../utils/cnblog'
import { randomArrayElements, randomImgUrl } from '../../utils/helpers'

export function postTopImage(theme, devOptions) {
  const { enable, imgs, fixed } = usePostTopImageOptions(devOptions)

  if (!enable) {
    return
  }
  if (!isPostDetailsPage()) {
    return
  }

  const url
    = imgs.length === 0 ? randomImgUrl() : randomArrayElements(imgs, 1)[0]
  const ele = `<a  href="${url}" target="blank"><div id="custom-post-topimage"></div></a>`
  const style = {
    'background-image': `url(${url})`,
  }

  if (fixed) {
    style['background-attachment'] = 'fixed'
  }
  $('.post>.postTitle').before(ele)
  $('#custom-post-topimage').css(style)
}
