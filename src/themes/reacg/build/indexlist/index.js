// disabled
// 首页列表图片
import './index.css'
import { randomImgurl, userAgent, randomArrayElements } from 'utils/helpers'
import { getCurrentPage } from 'utils/cnblog'

const { enable, imgs } = window.opts.indexListImg

function image() {
    let image =
        imgs.length === 0 ? randomImgurl() : randomArrayElements(imgs, 1)[0]
    return image
}

function listImages() {
    $('.postCon').each(function() {
        $(this).append(
            `<div class='custom-list-image' style="background-image:url(${image()})"></div>`,
        )
    })
}

function indexList() {
    if (!enable) return
    if (getCurrentPage() !== 'index') return
    if (userAgent() !== 'pc') return
    listImages()
}

export default indexList
