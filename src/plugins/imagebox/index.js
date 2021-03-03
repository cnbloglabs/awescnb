/**
 * 随笔详情页图片灯箱
 * 相册查看图像
 */
import { mediaZoomJs } from '@constants/urls'
import { imageboxConfig } from '@config/plugins.js'
import {
    isPostDetailsPage,
    isAlbumPage,
    poll,
    isMd,
    mousewheel,
    cacheScript,
} from '@tools'

const customGalleryClass = 'custom-gallery'
const mediumZoomConfig = {
    opacity: 0.5,
}

/**
 * 去除 TinyMCE 插入的图片的容器链接
 */
function removeImageOuterHref() {
    if (isMd()) return
    $('.medium-zoom-image')
        .css('display', 'block')
        .unwrap()
    console.log(1213132)
}

/**
 * 构建相册
 */
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
        gallery
            .find('div')
            .append(`<img src="${openSrc}"/>`)
    })
    $('.forFlow').append(gallery)
    $('.gallery').remove()
}

/**
 * 构建图片灯箱
 */
function build() {
    // 博客园给随笔内容中的图片添加了这个功能，现将它移除
    // #cnblogs_post_body img,
    const imgList = $(
        ` .blog_comment_body img, .${customGalleryClass} img`,
    )
    if (imgList === 0) return
    $.each(imgList, i => {
        const item = $(imgList[i])
        item.addClass('custom-zoom')
    })

    const zoom = window.mediumZoom(
        '.custom-zoom',
        mediumZoomConfig,
    )

    zoom.on('open', () => {
        mousewheel(() => {
            zoom.close()
        })
    })

    removeImageOuterHref()
}

export default devOptions => {
    const { enable } = imageboxConfig(devOptions)
    if (!enable) return
    if (!isMd() && !isAlbumPage() && !isPostDetailsPage())
        return
    if ($('.custom-zoom').length) return
    buildGallery()
    cacheScript(mediaZoomJs, () => {
        const condition =
            $('.blog_comment_body').length ||
            $('.' + customGalleryClass).length
        poll(condition, build)
    })
    window.imagebox = build
}
