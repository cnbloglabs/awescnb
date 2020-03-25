import { pageName } from '@/assets/utils/tools'
import baguetteBox from '../../node_modules/baguettebox.js/dist/baguetteBox'
import '../../node_modules/baguettebox.js/dist/baguetteBox.css'

// 设置图片灯箱
function imagebox() {
    const options = window.opts.imagebox
    if (!options.enable) return
    if (pageName() !== 'post') return
    
    const imgList = $('#cnblogs_post_body img,.feedbackCon img')
    if (imgList === 0) return
    $.each(imgList, i => {
        const item = $(imgList[i])
        const flag = item.attr('id')
        if (typeof flag === 'undefined' && item.outerWidth() > 50) {
            item.wrap(
                "<a class='lightbox' href='" + item.attr('src') + "'></a>",
            )
        }
    })
    baguetteBox.run('.lightbox')
}

export default imagebox
