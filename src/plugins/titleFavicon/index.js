// 设置网站图标和标题
import { getThemeOptions } from '@config/extra'

/**
 * 构建网页标题
 * @param {*} title
 */
function setTitle(title) {
    if (title === '') return
    document.title = title
}

/**
 * 构建网页 favicon
 * @param {*} favicon
 */
function setFavicon(favicon) {
    if (favicon === '') return
    document.getElementById('favicon').href = favicon
}

export default devOptions => {
    const { title, favicon } = getThemeOptions(devOptions)
    setTitle(title)
    setFavicon(favicon)
}
