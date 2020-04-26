// 首页列表图片
import { randomImgurl, pageName, userAgent, randomArrayElements } from '@tools'
import './index.css'

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
    if (pageName() !== 'index') return
    if (userAgent() !== 'pc') return
    listImages()
}

export default indexList
