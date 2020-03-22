import icons from '../constants/icons'
import { iconInSvg } from '../utils/tools'

// mode 初始化和点击切换
function mode() {
    const enableBarrage = window.opts.barrage.enable
    const isNight = new Date().getHours() > 19
    const $modeIcon = `<div id='mode-change'>${
        isNight ? iconInSvg(icons.dark) : iconInSvg(icons.light)
    }</div>`

    $('#navigator').prepend($modeIcon)

    // if (isNight && localStorage.modeType !== 'dark') {
    //     shootBarrage(['夜深了，点击左上角小太阳试试暗色模式吧 🐱‍👤'])
    // }

    localStorage.modeType === 'dark'
        ? changeModeToggle('dark')
        : changeModeToggle('light')

    $(document).on('click', '#mode-change', () => {
        $('body').addClass('mode-change')
        if ($('#mode-dark').length > 0) {
            changeModeToggle('light')
            if (!enableBarrage) return
            // shootBarrage(['已成功切换为亮色模式 🌕'])
        } else {
            changeModeToggle('dark')
            if (!enableBarrage) return
            // shootBarrage(['已成功切换为暗色模式 ✨'])
        }
    })
}

/**
 * @description 切换暗色主题和亮色主题
 * @param {String} mode 'dark' 或 'light'
 */
function changeModeToggle(mode = 'light') {
    const $dark = `<style id='mode-dark'>:root {--dark-background-g: #333;--dark-background-w: #555;--dark-background-e: #7c7c7c;--dark-text-0: #ccc;--dark-text-3: #ccc;--dark-text-4: #c0c0c0;--dark-text-5: #999;--dark-text-9: #7c7c7c;--dark-text-a: #000;}</style>`
    const $darkIcon = `<div id='mode-change'>${iconInSvg(
        icons.dark,
    )}</div>`
    const $lightIcon = `<div id='mode-change'>${iconInSvg(
        icons.light,
    )}</div>`

    if (mode === 'dark') {
        $('head').append($dark)
        $($darkIcon).replaceAll('#mode-change')
        localStorage.modeType = 'dark'
        $('#mode-change .icon').css('animation', 'none')
    } else {
        $('#mode-dark').remove()
        $($lightIcon).replaceAll('#mode-change')
        localStorage.modeType = 'light'
    }

    setTimeout(() => {
        $('body').removeClass('mode-change')
    }, 300)
}

export default mode
