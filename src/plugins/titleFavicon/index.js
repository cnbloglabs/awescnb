// 设置网站图标和标题
import { getThemeOptions } from '@config/extra'

function setTitle(title) {
    if (title === '') return
    document.title = title
}

function setFavicon(favicon) {
    if (favicon === '') return
    document.getElementById('favicon').href = favicon
}

export default devOptions => {
    const { title, favicon } = getThemeOptions(devOptions)
    setTitle(title)
    setFavicon(favicon)
}
