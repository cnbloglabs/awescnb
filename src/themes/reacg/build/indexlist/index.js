import { randomImgurl, pageName, userAgent, randomArrayElements } from '@tools'
import './index.css'

const { imgList } = window.opts.theme

function image() {
    let image =
        imgList.length === 0
            ? randomImgurl()
            : randomArrayElements(imgList, 1)[0]
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
    if (pageName() !== 'index') return
    if (userAgent() !== 'pc') return
    listImages()
}

export default indexList
