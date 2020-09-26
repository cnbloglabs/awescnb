/**
 * 设置主题色
 * 需要皮肤使用css自定义属性 --themeColor
 */
import { randomColor } from '@tools'
import { getThemeOptions } from '@config/extra'

export default devOptions => {
    const { color } = getThemeOptions(devOptions)
    const themeColor =
        color === 'random' ? randomColor('rgba') : color
    $('head').append(
        `<style>:root{--themeColor: ${themeColor}}</style>`,
    )
}
