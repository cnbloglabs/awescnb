// 二维码
import { qrcodeConfig } from '@config/plugins'

function buildImage(img) {
    if (img === '') return
    const ele = `<img class='custom-qrcode' src='${img}' />`
    $('.custom-signature').length
        ? $('.custom-signature').after(ele)
        : $('#blog-news').after(ele)
}

function buildDesc(desc) {
    if (desc === '') return
    const ele = `<div class='custom-qrcode-desc'>${desc}</div>`
    $('.custom-qrcode').after(ele)
}

export default devOptions => {
    const { enable, img, desc } = qrcodeConfig(devOptions)
    if ($('#blog-news').length === 0) return
    if (!enable) return
    buildImage(img)
    buildDesc(desc)
}
