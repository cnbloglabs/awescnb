/**
 * 设置皮肤色
 * 需要皮肤使用相关 css 自定义属性
 */
import { randomColor } from 'utils/helpers'
import { getThemeOptions } from 'options/extra'

/**
 * 将 16 进制颜色转成 rgb 或 rgba
 * @param {string} hex
 * @param {number} opacity
 */
function hexToRgba(hex, opacity) {
    if (!hex) return
    const rgbReg = /^rgb\(/
    if (rgbReg.test(hex)) return hex
    const hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    if (!hexReg.test(hex)) return hex
    const red = parseInt('0x' + hex.slice(1, 3))
    const green = parseInt('0x' + hex.slice(3, 5))
    const blue = parseInt('0x' + hex.slice(5, 7))
    const rgb = `rgb(${red},${green},${blue})`
    if (!opacity) return rgb
    return `rgba(${red},${green},${blue},${opacity})`
}

/**
 * 获取皮肤色
 * @param {*} color
 */
function buildMainColor(color) {
    const mainColor = color === 'random' ? randomColor('rgba') : color
    return mainColor
}

/**
 * 插入 css 变量
 * @param {*} color
 */
function insertStyle(color) {
    const primary = buildMainColor(color)
    const primary8 = hexToRgba(primary, 0.85)
    const primary4 = hexToRgba(primary, 0.4)
    const primary2 = hexToRgba(primary, 0.2)

    $('head').append(
        `<style class="themeColor">:root{
            --themeColor: ${primary};
            --theme-primary-8: ${primary8};
            --theme-primary-4: ${primary4};
            --theme-primary-2: ${primary2};
        </style>`,
    )
}

export default (theme, devOptions) => {
    const { color } = getThemeOptions(devOptions)
    insertStyle(color)
}
