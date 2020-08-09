// 二维码
const { enable, img, desc } = window.opts.qrcode
const qrcodeImg = window.opts.theme.qrcode //兼容旧的api

function buildImage() {
    if (img === '') return
    const ele = `<img class='custom-qrcode' src='${qrcodeImg || img}' />`
    $('.custom-signature').length
        ? $('.custom-signature').after(ele)
        : $('#blog-news').after(ele)
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
