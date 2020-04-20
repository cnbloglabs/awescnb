// 设置主题色
// 需要皮肤使用变量 --themeColor
import { getRandomColor } from '@/assets/utils/tools'

function themeColor() {
    const option = window.opts.theme.color
    const themeColor = option === 'random' ? getRandomColor('rgba') : option
    $('head').append(`<style>:root{--themeColor: ${themeColor}}</style>`)
}

export default themeColor
