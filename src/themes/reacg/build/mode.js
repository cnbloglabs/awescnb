import icons from '../constants/icons'
import { iconInSvg } from '../utils/tools'
// import { shootCustom } from '@/plugins/barrage'

// mode 初始化和点击切换
function init() {
    const nowHour = new Date().getHours()
    const isNight = nowHour > 19 || nowHour <= 5

    const $modeIcon = `<div id='mode-change'>${
        isNight ? iconInSvg(icons.dark) : iconInSvg(icons.light)
    }</div>`
    $('#header').prepend($modeIcon)

    if (isNight && localStorage.modeType !== 'dark') {
        // shootCustom(['夜深了，点击左上角小太阳试试暗色模式吧 🐱‍👤'])
    }

    localStorage.modeType === 'dark'
        ? changeModeToggle('dark')
        : changeModeToggle('light')
}

// 点击事件
function click() {
    $(document).on('click', '#mode-change', () => {
        $('body').addClass('mode-change')
        if ($('#mode-dark').length > 0) {
            changeModeToggle('light')
        } else {
            changeModeToggle('dark')
            // shootCustom(['已成功切换为暗色模式 ✨'])
        }
    })
}

/**
 * @description 切换暗色主题和亮色主题
 * @param {String} mode 'dark' 或 'light'
 */
function changeModeToggle(mode = 'light') {
    const $dark = `<style id='mode-dark'>:root {--dark-background-g: #333;--dark-background-w: #555;--dark-background-e: #7c7c7c;--dark-text-0: #ccc;--dark-text-3: #ccc;--dark-text-4: #c0c0c0;--dark-text-5: #999;--dark-text-9: #7c7c7c;--dark-text-10: #7c7c7c;--dark-text-a: #000;}</style>`
    const $darkIcon = `<div id='mode-change'>${iconInSvg(icons.dark)}</div>`
    const $lightIcon = `<div id='mode-change'>${iconInSvg(icons.light)}</div>`

    if (mode === 'dark') {
        background('dark')
        $('head').append($dark)
        $($darkIcon).replaceAll('#mode-change')
        localStorage.modeType = 'dark'
        $('#mode-change .icon').css('animation', 'none')
    } else {
        background('light')
        $('#mode-dark').remove()
        $($lightIcon).replaceAll('#mode-change')
        localStorage.modeType = 'light'
    }

    setTimeout(() => {
        $('body').removeClass('mode-change')
    }, 300)
}

function background(mode = 'light') {
    const { enable, value, type } = window.opts.bodyBackground
    if (!enable) return
    if (mode === 'dark') {
        if (type === 'color') {
            $('body').css('background-color', `${value}`) // bodybgc设置
        } else {
            $('body').css('background-image', `url(${value})`) // bodybgc设置
        }
    } else {
        if (type === 'color') {
            $('body').css('background-color', `${value}`) // bodybgc设置
        } else {
            $('body').css('background-image', `url(${value})`) // bodybgc设置
        }
    }
}

function mode() {
    init()
    click()
}

export default mode
