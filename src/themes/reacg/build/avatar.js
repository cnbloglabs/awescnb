// 设置头像
function avatar() {
    const avatar = window.opts.theme.avatar
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
