// 设置页面背景色
// 设置内容透明度
// 仅引入即可

const config = window.opts

function setBodyBackground() {
    const options = config.bodyBackground
    if (!options.enable) return

    $('#main,#navigator').css('opacity', `${options.opacity}`)
    if ($('#catalog').length > 0) {
        $('#main').css('opacity', `${options.opacity}`)
    }
    if (options.type === 'color') {
        $('body').css('background-color', `${options.value}`)
    } else if (options.type === 'img') {
        $('body').css('background-image', `url(${options.value})`)
        if (!options.repeat) {
            $('body').css({
                'background-repeat': `no-repeat`,
                'background-size': '100% 100%',
                'background-attachment': 'fixed',
            })
        }
    }
}

export default setBodyBackground
