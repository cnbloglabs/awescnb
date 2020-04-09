import printing from './printing'
import grayDay from './grayDay'
import { shootCustom } from '@plugins/barrage'

const noticeContent = []

// 隐藏加载动画
function hideLoading() {
    setTimeout(() => {
        $('#loading').fadeOut(200)
    }, 180)
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
    grayDay()
}

module.exports = build
export default build
