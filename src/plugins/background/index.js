/**
 * 设置页面背景、内容透明度
 */
import { userAgent, isUrl } from 'utils/helpers'
import { backgroundConfig } from 'options/plugins'

/**
 * 设置透明度
 * @param {Number} opacity 透明度
 */
function setOpacity(opacity, opacitySelector) {
    $(opacitySelector).css('opacity', `${opacity}`)
}

/**
 * 设置背景
 * @param {String} value
 * @param {Boolean} repeat 是否重复图片
 */
function setBackground(value, repeat) {
    const type = isUrl(value) ? 'img' : 'color'
    // const type =   new RegExp('http').test(value) ? 'img' : 'color'
    if (type === 'color') {
        $('body').css('background-color', `${value}`)
    }
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

export default (theme, devOptions, pluginOptions) => {
    const { enable, opacity, value, repeat } = backgroundConfig(devOptions)
    if (!enable) return
    setBackground(value, repeat)
    const pluginDefaultOptions = {
        opacitySelector: '#main,#navigator',
    }
    const { opacitySelector } = Object.assign(
        {},
        pluginDefaultOptions,
        pluginOptions,
    )
    setOpacity(opacity, opacitySelector)
}
