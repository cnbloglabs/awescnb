import { prettyLog } from 'utils/helpers'
import { __DEV__ } from 'constants/env'
import { getThemeOptions } from 'options/extra'

/**
 * 创建开发环境配置
 */
function setDevOptions() {
    if (__DEV__) {
        window.opts = {}
    }
}

/**
 * 隐藏 loading
 */
function hideLoading() {
    const loading = $('#loading')
    if (loading.length) {
        loading.fadeOut(300)
    }
}

/**
 * 控制台打印 awescnb 信息
 */
function printInfo(themeOptions) {
    const { log } = getThemeOptions(themeOptions)
    if (!log) return
    if (__DEV__) return
    const logs = [
        {
            str: '# # # # # # # # # # # # # # # # # # # # # # # #',
            color: '#1e90ff',
        },
        {
            str: '# 🔮 Awescnb: awesome cnblog!',
            color: '#eb4d4b',
        },
        {
            str: '# 👌 使用 awescnb 安装、构建、分享皮肤',
            color: '#a29bfe',
        },
        {
            str: '# 📑 文档:https://www.yuque.com/awescnb',
            color: '#fd79a8',
        },
        {
            str: '# 🐧 Group:541802647(活跃)',
            color: '#55efc4',
        },
        {
            str: '# 📌 Gitee:https://gitee.com/guangzan/awescnb',
            color: '#7ed6df',
        },
        {
            str: '# 🌏 GitHub:https://github.com/awescnb/awescnb',
            color: '#f368e0',
        },
        {
            str: '# # # # # # # # # # # # # # # # # # # # # # # #',
            color: '#1e90ff',
        },
    ]
    for (const { str, color } of logs) {
        prettyLog(str, color)
    }
}

export default options => {
    setDevOptions()
    hideLoading()
    printInfo(options)
}
