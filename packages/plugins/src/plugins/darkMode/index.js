import { getDarkModeOptions } from '@acnb/options'

/**
 * 覆盖自定义背景色
 * @param {string} mode
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
 * 切换代码块深色、浅色主题
 * @param {string} mode 'dark' | 'light'
 */
function setCodeTheme(mode) {
  mode === 'dark'
    ? window.highlighter.setTheme(window.darkModeCodeHighlightTheme)
    : window.highlighter.setTheme(window.codeHighlightTheme)
}

/**
 * 在暗色皮肤和亮色皮肤之间切换
 * @param {string} mode 'dark' | 'light'
 * @param {boolean} withTransition
 */
function changeMode(mode, withTransition = true) {
  setCodeTheme(mode)
  $('html').attr('theme', mode)
  localStorage.modeType = mode

  const transitionClassName =
    mode === 'dark' ? 'light-to-dark' : 'dark-to-light'

  if (withTransition) {
    $('body').addClass(transitionClassName)
  }

  setTimeout(() => $('body').removeClass(transitionClassName), 1200)
}

/**
 * 初始化
 * @param {string} darkDefault
 * @param {boolean} autoDark
 * @param {boolean} autoLight
 */
function init(darkDefault, autoDark, autoLight) {
  const hour = new Date().getHours()
  const isNight = hour > 19 || hour <= 5
  const storage = localStorage.modeType

  const followStorage = () => {
    if (storage) {
      changeMode(storage, false)
      return
    }

    if (!storage) {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? changeMode('dark', false)
        : changeMode('light', false)
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
function listenToggleButtonClick() {
  $(document).on('click', '.mode-change', () => {
    const isDark = $('html').attr('theme') === 'dark'
    isDark ? changeMode('light') : changeMode('dark')
  })
}

export function darkMode(_, devOptions) {
  const { enable, darkDefault, autoDark, autoLight } =
    getDarkModeOptions(devOptions)

  if (!enable) {
    return
  }
  init(darkDefault, autoDark, autoLight)
  listenToggleButtonClick()
}
