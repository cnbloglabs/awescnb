import env from '@/constants/env'

const constants = {
    install: '安装皮肤: https://gitee.com/guangzan/awescnb',
    qqGroup: 'qq群: 541802647',
}

// 隐藏加载动画
function hideLoading() {
    if ($('#loading').length !== 1) return
    $('#loading').fadeOut(300)
}

// 控制台打印
function printing() {
    if (env === 'dev') return
    const { install, qqGroup } = constants
    console.log(install)
    console.log(qqGroup)
}

module.exports = { hideLoading, printing }
