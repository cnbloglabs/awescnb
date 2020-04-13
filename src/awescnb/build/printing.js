// 控制台打印
import { prettyLog } from '@tools'
import env from '@/constants/env'

const log = [
    {
        str: `Awescnb: awesome cnblog!`,
        color: '#eb4d4b',
    },
    {
        str: `为博客园发烧友而生！`,
        color: '#f0932b',
    },
    {
        str: `使用 awescnb 快速构建、安装、分享博客园皮肤`,
        color: '#f9ca24',
    },
    {
        str: 'QQ群: 541802647(活跃)',
        color: '#6ab04c',
    },
    {
        str: '码云: https://gitee.com/guangzan/awescnb',
        color: '#4834d4',
    },
]

function printing() {
    if (env === 'dev') return
    for (const { str, color } of log) {
        prettyLog(str, color)
    }
}

export default printing
