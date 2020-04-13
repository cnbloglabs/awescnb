// 构建侧边栏二维码

import './index.css'
const { enable, img, desc } = window.opts.qrcode
const qrcodeImg = window.opts.theme.qrcode //兼容旧的api

function buildImage() {
    $('#blog-news').before(
        `<img class='custom-qrcode' src='${qrcodeImg || img}' />`,
    )
}

function buildDesc() {
    if (desc === '') return
    const ele = `<div class='custom-qrcode-desc'>${desc}</div>`
    $('.custom-qrcode').after(ele)
}

function qrcode() {
    if ($('#blog-news').length === 0) return
    if (qrcodeImg || enable) {
        buildImage()
        buildDesc()
    }
}

export default qrcode
