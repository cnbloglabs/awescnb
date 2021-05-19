import './index.scss'
import { icons } from '../icons/icons'
import { iconInSvg } from '../../utils/tools'
import toast from 'plugins/toast'

const { enable, autoDark, autoLight } = window.opts.darkMode
const $dark = `<style id='mode-dark'>:root {--dark-background-g: #333;--dark-background-w: #555;--dark-background-e: #7c7c7c;--dark-text-0: #ccc;--dark-text-3: #ccc;--dark-text-4: #c0c0c0;--dark-text-5: #999;--dark-text-9: #7c7c7c;--dark-text-10: #7c7c7c;--dark-text-a: #000;}</style>`
const $darkIcon = `<div id='mode-change'>${iconInSvg(icons.dark)}</div>`
const $lightIcon = `<div id='mode-change'>${iconInSvg(icons.light)}</div>`

/**
 * @description 切换暗色主题和亮色主题
 * @param {String} mode 'dark' 或 'light'
 */
function changeModeToggle(mode = 'light') {
    if (mode === 'dark') {
        toast('进入暗色模式 ✨', 'info')
        setBackground('dark')
        $('head').append($dark)
        $($darkIcon).replaceAll('#mode-change')
        localStorage.modeType = 'dark'
        $('#mode-change .icon').css('animation', 'none')
    }
    if (mode === 'light') {
        toast('进入亮色模式🌕')
        setBackground('light')
        $('#mode-dark').remove()
        $($lightIcon).replaceAll('#mode-change')
        localStorage.modeType = 'light'
    }

    setTimeout(() => {
        $('body').removeClass('mode-change')
    }, 300)
}

// 覆盖自定义背景色
function setBackground(mode = 'light') {
    const { enable, value, type } = window.opts.bodyBackground
    if (!enable) return

    if (mode === 'dark') {
        if (type !== 'color') return
        setTimeout(() => {
            $('body').css('background-color', '#333')
        }, 0)
    }

    if (mode === 'light') {
        if (type !== 'color') return
        $('body').css('background-color', `${value}`) // bodybgc设置
    }
}

// mode 初始化和点击切换
function init() {
    const nowHour = new Date().getHours()
    const isNight = nowHour > 19 || nowHour <= 5

    const $modeIcon = `<div id='mode-change'>${
        isNight ? iconInSvg(icons.dark) : iconInSvg(icons.light)
    }</div>`

    $('#navigator').prepend($modeIcon)

    if (isNight && localStorage.modeType !== 'dark') {
        if (autoDark) changeModeToggle('dark')
    }

    if (!isNight && localStorage.modeType === 'dark') {
        if (autoLight) changeModeToggle('light')
    }

    localStorage.modeType === 'dark'
        ? changeModeToggle('dark')
        : changeModeToggle('light')
}

// 点击事件
function click() {
    $(document).on('click', '#mode-change', () => {
        $('body').addClass('mode-change')
        $('#mode-dark').length
            ? changeModeToggle('light')
            : changeModeToggle('dark')
    })
}

function mode() {
    if (!enable) return
    init()
    click()
}

export default mode
