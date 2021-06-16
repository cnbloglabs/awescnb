// import toast from 'plugins/toast'
import { darkModeConfig } from 'options/plugins'

/**
 * 在暗色皮肤和亮色皮肤之间切换
 * @param { String }
 * @param { Boolean }
 */
function changeMode(mode, hasTransition = true) {
    if (mode === 'dark') {
        $('html').attr('theme', 'dark')
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
 * @param {*} String defaultMode
 * @param {*} Boolean autoDark
 * @param {*} Boolean autoLight
 */
function init(darkDefault, autoDark, autoLight) {
    const hour = new Date().getHours()
    const isNight = hour > 19 || hour <= 5
    const storage = localStorage.modeType

    const followStorage = () => {
        if (storage) {
            storage === 'dark'
                ? changeMode('dark', false)
                : changeMode('light', false)
            return
        }

        if (!storage) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                changeMode('dark', false)
            } else {
                changeMode('light', false)
            }
        }
    }

    if (!storage && darkDefault) {
        changeMode('dark', false)
        return
    }

    if (isNight) {
        autoDark ? changeMode('dark', false) : followStorage()
    }

    if (!isNight) {
        autoLight ? changeMode('light', false) : followStorage()
    }
}

/**
 * 处理皮肤切换按钮点击事件
 */
function click() {
    $(document).on('click', '.mode-change', () => {
        const isDark = $('html').attr('theme')
        isDark ? changeMode('light') : changeMode('dark')
    })
}

export default (theme, devOptions) => {
    const { enable, darkDefault, autoDark, autoLight } = darkModeConfig(
        devOptions,
    )
    if (!enable) return
    init(darkDefault, autoDark, autoLight)
    click()
}
