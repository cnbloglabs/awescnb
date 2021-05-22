module.exports = {
    themeName: 'demo',
    template: 'post',
    eslint: true,
    sourceMap: true,
    openBrowser: true,
    openAnalyzer: false,
    cssExtract: false,
}

// OPTIONS
// themeName     - 您创建的皮肤文件夹名称
// eslint        - 是否开启 eslint
// template      - 要启动的页面 public/templates（开发环境）
// openBrowser   - 是否自动打开浏览器（开发环境）
// sourceMap     - 是否开启 sourcemap（开发环境）
// openAnalyzer  - 是否开启 size 分析（生产环境）
// cssExtract    - 是否单独抽离 css（生产环境）

// THEMENAME:<String>
// geek
// reacg
// simple
// view
// bilibili
// element
// acg
// silence

// TEMPLATE:<String>
// index         - 首页
// post          - 博文详情页 Markdown
// post1         - 博文详情页 TinyMCE
// tags          - 标签页
// photos        - 相册
// photoview     - 管理 > 相册 > 打开相册 > 点击预览
// category      - 随笔分类
// postarchive   - 随笔档案
