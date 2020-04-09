// 控制台打印
import { prettyLog } from '@tools'
import env from '@/constants/env'

const log = [
    {
        str: `Awescnb: awesome cnblog!`,
        color: '#00b894',
    },
    {
        str: `永久开源、长期维护！`,
        color: '#2d3436',
    },
    {
        str: '安装皮肤: https://gitee.com/guangzan/awescnb',
        color: '#0984e3',
    },
    {
        str: 'qq群: 541802647',
        color: '#f0932b',
    },
]

function printing() {
    if (env === 'dev') return
    for (const { str, color } of log) {
        prettyLog(str, color)
    }
}

export default printing
