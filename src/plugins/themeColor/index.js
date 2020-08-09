/**
 * 设置主题色
 * 需要皮肤使用css自定义属性 --themeColor
 */
import { randomColor } from '@tools'

function themeColor() {
    const { color } = window.opts.theme
    const themeColor = color === 'random' ? randomColor('rgba') : color
    $('head').append(`<style>:root{--themeColor: ${themeColor}}</style>`)
}

export default themeColor
