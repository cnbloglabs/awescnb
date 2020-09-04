// 设置图片灯箱
import { pageName, poll, isMd, mousewheel } from '@/assets/utils/tools'
import mediumZoom from 'medium-zoom'

const options = window.opts.imagebox
const mediumZoomConfig = {}

function build() {
    const imgList = $('#cnblogs_post_body img, .blog_comment_body img')
    if (imgList === 0) return
    $.each(imgList, i => {
        const item = $(imgList[i])
        item.addClass('custom-zoom')
    })
    const zoom = mediumZoom('.custom-zoom', mediumZoomConfig)

    zoom.on('open', () => {
        mousewheel(() => {
            zoom.close()
        })
    })
}

function imagebox() {
    if (!options.enable) return
    if (pageName() !== 'post') return
    if (!isMd()) return
    if ($('.custom-zoom').length) return

    poll($('.blog_comment_body').length, build)
    window.imagebox = build
}

export default imagebox
