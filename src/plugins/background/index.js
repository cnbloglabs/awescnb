// 设置页面背景色
// 设置内容透明度
// 仅引入即可

import { userAgent } from '@tools'

function setBodyBackground() {
    const { enable, opacity, type, value, repeat } = window.opts.bodyBackground
    if (!enable) return
    $('#main,#navigator').css('opacity', `${opacity}`)
    if ($('#catalog').length) $('#main').css('opacity', `${opacity}`)
    if (type === 'color') $('body').css('background-color', `${value}`)
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

export default setBodyBackground
