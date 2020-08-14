import toast from '@plugins/toast'

const { enable, autoDark, autoLight } = window.opts.darkMode

/**
 * 在暗色主题和亮色主题之间切换
 */
function changeMode(mode) {
    if (mode === 'dark') {
        $('html').attr('theme', 'dark')
        toast('进入暗色模式', 'info')
        setBackground('dark')
        localStorage.modeType = 'dark'
        $('body').addClass('light-to-dark')
        setTimeout(() => {
            $('body').removeClass('light-to-dark')
        }, 1200)
    } else {
        $('html').removeAttr('theme')
        toast('进入亮色模式')
        setBackground()
        localStorage.modeType = 'light'
        $('body').addClass('dark-to-light')
        setTimeout(() => {
            $('body').removeClass('dark-to-light')
        }, 1200)
    }
}

/**
 * 覆盖自定义背景色
 * @param {String} mode
 */
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

/**
 * 初始化
 */
function init() {
    const hour = new Date().getHours()
    const isNight = hour > 19 || hour <= 5
    const storage = localStorage.modeType

    const followStorage = () => {
        storage === 'dark' ? changeMode('dark') : changeMode('light')
    }

    if (isNight) {
        autoDark ? changeMode('dark') : followStorage()
    } else {
        autoLight ? changeMode('light') : followStorage()
    }
}

function click() {
    $(document).on('click', '.mode-change', () => {
        const currentMode = $('html').attr('theme')
        currentMode === 'dark' ? changeMode() : changeMode('dark')
    })
}

function mode() {
    if (!enable) return
    init()
    click()
}

export default mode