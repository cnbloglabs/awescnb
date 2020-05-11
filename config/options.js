///////// description /////////
// 你无需直接更改webpack配置文件
// 直接更改这里的配置
// 其他配置我都帮你做好了
// 当然，有特殊需求自行更改

module.exports = {
    themeName: 'reacg',
    template: 'tag',
    eslint: true,
    sourceMap: false,
    openAnalyzer: false,
    cssExtract: false,
}

///////// options /////////
// themeName - 你创建的主题文件夹名称 (运行 npm start 会启动它)  'gshang' | 'element' 'acg' | 'reacg'
// template - 本地开发要启动的页面 'index' -> 首页 'post' -> 随笔详情页 'tag' -> 标签页 ...
// eslint - 是否开启eslint
// sourceMap - 是否开启sourcemap
// openAnalyzer - build 时开启 size 分析
// cssExtract 单独抽离css

///////// run the build /////////
// - npm start
// - npm run build
// - or use yarn
