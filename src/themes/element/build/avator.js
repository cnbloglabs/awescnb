// 设置侧边栏头像
// 引入即可

import env from '@constants/env'
import { randomAva } from '@constants/urls'

function avatar() {
    const avatar = env === 'dev' ? randomAva : window.opts.theme.avatar
    if (avatar === '') return
    $('#blogLogo').attr('src', avatar)
}

export default avatar
