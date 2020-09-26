// 设置侧边栏头像
import './index.scss'
import { getThemeOptions } from '@config/extra'

export default () => {
    const { avatar } = getThemeOptions()
    if (avatar === '' || $('#blog-news').length === 0)
        return
    $('#blog-news').prepend(
        `<img id='custom-avatar' src='${avatar}' />`,
    )
}
