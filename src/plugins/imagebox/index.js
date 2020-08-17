// 设置图片灯箱
// 仅引入即可
import { pageName, poll, isMd } from '@/assets/utils/tools'
import mediumZoom from 'medium-zoom'

const options = window.opts.imagebox
const mediumZoomConfig = {
    background: 'rgba(0,0,0,0.3)',
}

function build() {
    const imgList = $('.forFlow img')
    if (imgList === 0) return
    $.each(imgList, i => {
        const item = $(imgList[i])
        item.addClass('custom-zoom')
    })
    mediumZoom('.custom-zoom', mediumZoomConfig)
}

function imagebox() {
    if (!options.enable) return
    if (pageName() !== 'post') return
    if (!isMd()) return
    poll($('.blog_comment_body').length, build)
    window.imagebox = build
}
export default imagebox
