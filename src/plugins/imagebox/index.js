// 设置图片灯箱
import { mediaZoomJs } from '@constants/urls'
import {
    isPostDetailsPage,
    isAlbumPage,
    poll,
    isMd,
    mousewheel,
    cacheScript,
} from '@/assets/utils/tools'

const options = window.opts.imagebox
const mediumZoomConfig = {}

function build() {
    const imgList = $(
        '#cnblogs_post_body img, .blog_comment_body img, .divPhoto img',
    )
    if (imgList === 0) return
    $.each(imgList, i => {
        const item = $(imgList[i])
        item.addClass('custom-zoom')
    })

    const zoom = window.mediumZoom('.custom-zoom', mediumZoomConfig)

    zoom.on('open', () => {
        mousewheel(() => {
            zoom.close()
        })
    })
}

function removePhototsOuterLink() {
    if (!isAlbumPage()) return
    $('.divPhoto a').removeAttr('href')
}

function imagebox() {
    if (!options.enable) return
    if (!isMd() && !isAlbumPage() && !isPostDetailsPage()) return
    if ($('.custom-zoom').length) return
    removePhototsOuterLink()
    cacheScript(mediaZoomJs, () => {
        const condition =
            $('.blog_comment_body').length || $('.divPhoto').length
        poll(condition, build)
    })
    window.imagebox = build
}

export default imagebox
