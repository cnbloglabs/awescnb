// 设置图片灯箱
import { mediaZoomJs } from '@constants/urls'
import {
    // isPostDetailsPage,
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

function imagebox() {
    if (!options.enable) return
    if (!isMd() && !isAlbumPage()) return
    if ($('.custom-zoom').length) return
    cacheScript(mediaZoomJs, () => {
        poll($('.blog_comment_body').length, build)
    })
    window.imagebox = build
}

export default imagebox
