const opts = window.opts
const constants = {
    install: '安装皮肤: https://gitee.com/guangzan/awescnb',
    qqGroup: 'qq群: 541802647',
}

// 隐藏加载动画
function hideLoading() {
    const topProgress = opts.topProgress.enable
    if (topProgress) return
    if ($('#loading').length !== 1) return
    $('#loading').fadeOut(300)
}

// 控制台打印
function printing() {
    const { install, qqGroup } = constants
    console.log(install)
    console.log(qqGroup)
}

module.exports = { hideLoading, printing }
