// 随笔详情页图片灯箱
// 相册查看图像
import { mediaZoomJs } from '@constants/urls'
import {
    isPostDetailsPage,
    isAlbumPage,
    poll,
    isMd,
    mousewheel,
    cacheScript,
} from '@/assets/utils/tools'

const { enable } = window.opts.imagebox
const mediumZoomConfig = {}
const customGalleryClass = 'custom-gallery'

function build() {
    const imgList = $(
        `#cnblogs_post_body img, .blog_comment_body img, .${customGalleryClass} img`,
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

function buildGallery() {
    if (!isAlbumPage()) return
    const title = $('.thumbTitle, .galleryTitle')
        .text()
        .trim()
    const el = `
    <section class="${customGalleryClass}">
        <h3>${title}</h3>
        <div></div>
    </section>`
    let gallery = $(el)
    $('.gallery img').each(function() {
        const src = $(this).attr('src')
        const openSrc = src.replace(/t_/, 'o_')
        gallery.find('div').append(`<img src="${openSrc}"/>`)
    })
    $('.forFlow').append(gallery)
    $('.gallery').remove()
}

function imagebox() {
    if (!enable) return
    if (!isMd() && !isAlbumPage() && !isPostDetailsPage()) return
    if ($('.custom-zoom').length) return
    buildGallery()
    cacheScript(mediaZoomJs, () => {
        const condition =
            $('.blog_comment_body').length || $('.' + customGalleryClass).length
        poll(condition, build)
    })
    window.imagebox = build
}

export default imagebox
