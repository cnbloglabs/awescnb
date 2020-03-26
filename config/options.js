// 你无需直接更改webpack配置文件
// 直接更改这里的配置
// 其他配置我都帮你做好了

module.exports = {
    themeName: 'reacg',   // 你创建的主题文件夹名称 (运行 npm start 会启动它) 'reacg' | 'gshang'
    template: 'post',     // 本地开发要启动的页面 'index' -> 首页 'post' -> 随笔详情页 'tag' -> 标签页 ...
    eslint: true,         // 是否开启eslint
    sourceMap: true,      //是否开启sourcemap
    openAnalyzer: false,  // build 时开启 size 分析
}