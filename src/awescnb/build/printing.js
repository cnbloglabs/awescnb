// 控制台打印
import { prettyLog } from '@tools'
// import env from '@/constants/env'

// const themes = [
//     {
//         theme: 'element',
//         author: 'gshang',
//     },
//     {
//         theme: 'gshang',
//         author: 'gshang',
//     },
//     {
//         theme: 'acg',
//         author: 'DIVMonster',
//     },
//     {
//         theme: 'reacg',
//         author: 'DIVMonster',
//     },
// ]

// const name = window.opts.theme.name
// let themeAuthor
// for (const { theme, author } of themes) {
//     if (theme === name) {
//         themeAuthor = author
//     }
// }

const log = [
    {
        str: '# # # # # # # # # # # # # # # # # # # # # # # #',
        color: '#1e90ff',
    },
    {
        str: '# 🔮 Awescnb: awesome cnblog!',
        color: '#eb4d4b',
    },
    {
        str: '# 🎉 博客园发烧友而生！',
        color: '#f0932b',
    },
    {
        str: '# 👌 使用 awescnb 快速安装、构建、分享皮肤',
        color: '#a29bfe',
    },
    // {
    //     str: `# 🎨 The theme you are using is ${name}`,
    //     color: '#f368e0',
    // },
    // {
    //     str: `# 💗 The author of the ${name} is ${themeAuthor}`,
    //     color: '#5352ed',
    // },
    {
        str: '# 📧 QQ群:541802647(活跃)',
        color: '#55efc4',
    },
    {
        str: '# 📑 文档:https://guangzan.gitee.io/awescnb-docs',
        color: '#fd79a8',
    },
    {
        str: '# 📌 码云:https://gitee.com/guangzan/awescnb',
        color: '#7ed6df',
    },
    {
        str: '# 🌏 GitHub:https://github.com/guangzan/awescnb',
        color: '#f368e0',
    },
    {
        str: '# # # # # # # # # # # # # # # # # # # # # # # #',
        color: '#1e90ff',
    },
]

function printing() {
    // if (env === 'dev') return
    for (const { str, color } of log) {
        prettyLog(str, color)
    }
}

export default printing
