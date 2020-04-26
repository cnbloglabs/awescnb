// 设置侧边栏头像
import './index.scss'
import env from '@constants/env'

function avatar() {
    let avatar = window.opts.theme.avatar
    if (env === 'dev') {
        avatar = 'https://dummyimage.com/50'
    }
    if (avatar === '' || $('#blog-news').length === 0) return
    $('#blog-news').prepend(`<img id='custom-avatar' src='${avatar}' />`)
}

export default avatar
