import env from '@/constants/env'
import { shootCustom } from '@plugins/barrage'
import { getDate } from '@tools'
import './index.css'

const noticeContent = []
const grayDate = [
    {
        date: '2020-04-04',
        desc: '深切哀悼为抗击新冠肺炎疫情斗争牺牲的烈士',
    },
]
const constants = {
    install: '安装皮肤: https://gitee.com/guangzan/awescnb',
    qqGroup: 'qq群: 541802647',
}

function gray() {
    for (const { date } of grayDate) {
        if (getDate() === date) {
            $('body')
                .addClass('gray-filter')
                .css({
                    'background-image': 'none',
                    'background-color': 'gray',
                })
        }
    }
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
    gray()
}

module.exports = build

export default build
