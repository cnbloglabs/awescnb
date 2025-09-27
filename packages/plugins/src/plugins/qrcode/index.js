// 二维码
import { getQrcodeOptions } from '@acnb/options'

/**
 * 构建二维码图片
 * @param {*} img
 */
function buildImage(img) {
  if (img === '') {
    return
  }
  const ele = `<img class='custom-qrcode' src='${img}' />`
  $('.custom-signature').length
    ? $('.custom-signature').after(ele)
    : $('#blog-news').after(ele)
}

/**
 * 构建文字描述信息
 * @param {*} desc
 */
function buildDesc(desc) {
  if (desc === '') {
    return
  }
  const ele = `<div class='custom-qrcode-desc'>${desc}</div>`
  $('.custom-qrcode').after(ele)
}

export function qrcode(_, devOptions) {
  const { enable, img, desc } = getQrcodeOptions(devOptions)

  if ($('#blog-news').length === 0) {
    return
  }
  if (!enable) {
    return
  }

  buildImage(img)
  buildDesc(desc)
}
