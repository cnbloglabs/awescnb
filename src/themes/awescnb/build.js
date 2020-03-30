import env from '@/constants/env'
import { shootCustom } from '@plugins/barrage'

const noticeContent = []
const constants = {
    install: '安装皮肤: https://gitee.com/guangzan/awescnb',
    qqGroup: 'qq群: 541802647',
}


// 隐藏加载动画
function hideLoading() {
    // if (env === 'dev') return
    setTimeout(() => {
        $('#loading').fadeOut(200)
    }, 400)
}

// 控制台打印
function printing() {
    if (env === 'dev') return
    const { install, qqGroup } = constants
    console.log(install)
    console.log(qqGroup)
}

// notice
function notice() {
    if (noticeContent.length === 0) return
    shootCustom(noticeContent)
}

// build
function build() {
    hideLoading()
    printing()
    notice()
}

module.exports = build

export default build
