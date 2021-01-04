module.exports = {
    themeName: 'geek',
    template: 'index',
    eslint: true,
    sourceMap: true,
    openBrowser: false,
    openAnalyzer: false,
    cssExtract: false,
}

//----- options -----
// themeName - 你创建的主题文件夹名称
// template - 本地开发要启动的页面
// eslint - 是否开启eslint
// sourceMap - 是否开启sourcemap
// openAnalyzer - build 时是否开启 size 分析
// cssExtract 单独抽离css
// openBrowser - 自动打开浏览器

//----- template -----
// - index 首页
// - post 随笔详情页
// - post1 富文本编辑器随笔详情页
// - tag 标签页
// - photos 相册
// - imgview 管理 > 相册 > 打开相册 > 点击预览
// - category 随笔分类
// - postarchive 随笔档案

//----- themes -----
// - geek
// - reacg
// - simple
// - view
// - bilibili
// - element
// - acg

//----- description -----
// 你无需直接更改webpack配置文件s
// 为了方便，请直接更改这里的配置
// 当然，有特殊需求可以自行更改
