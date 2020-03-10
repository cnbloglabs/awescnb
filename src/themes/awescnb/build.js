import { getRandomColor } from '@/assets/js/tools'

const userOptions = window.userOptions

// 隐藏加载动画
const hideLoading = () => {
    const topProgress = userOptions.topProgress.enable
    if (topProgress) return
    if ($('#loading').length !== 1) return
    $('#loading').fadeOut(300)
}

// 设置主题色
const setThemeColor = () => {
    const option = userOptions.theme.color
    let themeColor = option === 'random' ? getRandomColor('rgba') : option
    $('head').append(`<style>:root{--themeColor: ${themeColor}}<style>`)
}

// 设置网站图标标题
const setHtmlTitleIcon = () => {
    const favicon = userOptions.theme.favicon
    const title = userOptions.theme.title

    if (favicon !== '') {
        $('head').append(`<link rel="icon" href=${favicon} sizes="32x32">`)
    }
    if (title !== '') {
        document.title = title
    }
}

// 设置页面背景
const setBodyBackground = () => {
    const options = userOptions.bodyBackground
    const hasCatalog = $('#catalog').length > 0

    if (!options.enable) return
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
    $('#main,#navigator').css('opacity', `${options.opacity}`)
    if (hasCatalog) {
        $('#main').css('opacity', `${options.opacity}`)
    }
}

export { setHtmlTitleIcon, setThemeColor, setBodyBackground, hideLoading }
