/**
 * 设置页面背景、内容透明度
 */
import { userAgent } from '@tools'
import { backgroundConfig } from '@config/plugins.js'

const setOpacity = opacity => {
    $('#main,#navigator').css('opacity', `${opacity}`)
    if ($('#catalog').length)
        $('#main').css('opacity', `${opacity}`)
}

const setBackground = (value, repeat) => {
    const type = new RegExp('http').test(value)
        ? 'img'
        : 'color'
    if (type === 'color')
        $('body').css('background-color', `${value}`)
    if (type === 'img') {
        $('body').css('background-image', `url(${value})`)
        if (!repeat) {
            $('body').css({
                'background-repeat': `no-repeat`,
                'background-size': '100% 100%',
                'background-attachment': 'fixed',
            })
            if (userAgent() === 'phone') {
                $('body').css('background-size', 'cover')
            }
        }
    }
}

export default (devOptions = {}) => {
    const {
        enable,
        opacity,
        value,
        repeat,
    } = backgroundConfig(devOptions)
    if (!enable) return
    setOpacity(opacity)
    setBackground(value, repeat)
}
