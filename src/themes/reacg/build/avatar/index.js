// 设置侧边栏头像
import './index.scss'

function avatar() {
    const avatar = window.opts.theme.avatar
    if (avatar === '' || $('#blog-news').length === 0) return
    $('#blog-news').prepend(`<img id='custom-avatar' src='${avatar}' />`)
}

export default avatar
