// 在随笔详情页顶部随笔生成一个文章头图
// 引入即可
import { pageName, randomArrayElements } from '@tools'
import { randomImage } from '@constants/urls'
import './index.css'

function build() {
    const { enable, imgs, position } = window.opts.postTopimage

    if (!enable) return
    if (pageName() !== 'post') return

    let url = imgs.length === 0 ? randomImage : randomArrayElements(imgs, 1)[0]

    const ele = `<div id="custom-post-topimage"></div>`

    if (position === 'top') {
        $('.post>.postTitle').before(ele)
    }
    if (position === 'bottom') {
        $('#cnblogs_post_body').after(ele)
    }

    $('#custom-post-topimage').css('background-image', `url(${url})`)
}

// function download() {
//     $('#download').click(function() {
//         var x = new XMLHttpRequest()
//         x.open('GET', 'http://danml.com/wave2.gif', true)
//         x.responseType = 'blob'
//         x.onload = function() {
//             var url = window.URL.createObjectURL(x.response)
//             var a = document.createElement('a')
//             a.href = url
//             a.download = ''
//             a.click()
//         }
//         x.send()
//     })
// }

function postTopimage() {
    build()
    // download()
}

export default postTopimage
