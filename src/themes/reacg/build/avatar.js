// 设置侧边栏头像
// 引入即可

import env from '@constants/env'

function avatar() {
    let avatar = window.opts.theme.avatar
    if (env === 'dev') {
        avatar = 'https://dummyimage.com/50'
    }
    if (avatar === '' || $('#blog-news').length === 0) return

    const avatarStyle = {
        'margin-right': '0.2rem',
        width: '1.5rem',
        height: '1.5rem',
    }

    $('#blog-news').prepend(`<img id='custom-avatar' src='${avatar}' />`)
    $('#custom-avatar').css(avatarStyle)
}

export default avatar
