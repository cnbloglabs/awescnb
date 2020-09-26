import toast from '@plugins/toast'
import { darkModeConfig } from '@config/plugins'

/**
 * 在暗色主题和亮色主题之间切换
 * @param { String }
 * @param { Boolean }
 */
function changeMode(mode, hasTransition = true) {
    if (mode === 'dark') {
        $('html').attr('theme', 'dark')
        toast('进入暗色模式', 'info', 1000)
        // setBackground('dark')
        localStorage.modeType = 'dark'
        if (hasTransition) {
            $('body').addClass('light-to-dark')
        }
        setTimeout(() => {
            $('body').removeClass('light-to-dark')
        }, 1200)
    } else {
        $('html').removeAttr('theme')
        toast('进入亮色模式', 'success', 1000)
        // setBackground('light')
        localStorage.modeType = 'light'
        if (hasTransition) {
            $('body').addClass('dark-to-light')
        }
        setTimeout(() => {
            $('body').removeClass('dark-to-light')
        }, 1200)
    }
}

/**
 * 覆盖自定义背景色
 * @param {String} mode
 */
// function setBackground(mode) {
//     const {
//         enable,
//         value,
//         type,
//     } = window.opts.bodyBackground
//     if (!enable) return

//     if (mode === 'dark') {
//         if (type !== 'color') return
//         setTimeout(() => {
//             $('body').css('background-color', '#333')
//         }, 0)
//     }

//     if (mode === 'light') {
//         if (type !== 'color') return
//         $('body').css('background-color', `${value}`) // bodybgc设置
//     }
// }

/**
 * 初始化
 */
function init(autoDark, autoLight) {
    const hour = new Date().getHours()
    const isNight = hour > 19 || hour <= 5
    const storage = localStorage.modeType

    const followStorage = () => {
        storage === 'dark'
            ? changeMode('dark', false)
            : changeMode('light', false)
    }

    if (isNight) {
        autoDark
            ? changeMode('dark', false)
            : followStorage()
    } else {
        autoLight
            ? changeMode('light', false)
            : followStorage()
    }
}

function click() {
    $(document).on('click', '.mode-change', () => {
        const isDark = $('html').attr('theme')
        isDark ? changeMode('light') : changeMode('dark')
    })
}

export default devOptions => {
    const { enable, autoDark, autoLight } = darkModeConfig(
        devOptions,
    )
    if (!enable) return
    init(autoDark, autoLight)
    click()
}
