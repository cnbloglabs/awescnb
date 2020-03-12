## 这是什么

1. 你可以安装这些主题在你的博客园.这不是一个简单的博客园皮肤,而是一个合集.安装之后,你可以快速切换其他皮肤.

2. 你可以使用它创建自己的博客园主题.最后打包生成的 yourtheme.js 文件,可以供你自己使用.

3. 你可以使用它创建一个博客园皮肤.将你创建的皮肤贡献给项目,园友就能够切换到你的皮肤了.

## 在博客园安装这个皮肤

## 目录

```
├─config  webpack配置
└─src
    │  main.js 项目入口
    ├─assets 静态文件
    ├─constants 常量
    │      default.js  默认配置
    │      elements.js 博客园常用标签class\id
    │      env.js 环境变量
    │
    ├─plugins 公共插件
    │
    ├─templates 博客园html
    │
    └─themes
        ├─awescnb 其他皮肤继承的 class
        │  │  index.js
        │
        └─reacg 新增的皮肤
            │  index.js
```

## 创建新的皮肤

1. 在 themes 文件夹下创建一个新文件夹,比如 demo.
2. 在 demo 文件夹中创建 index.js.
3. 在 demo 文件夹中创建 index.css.
4. 在 demo/index.js 中粘贴以下代码.

```js
import './index.css'
import AwesCnb from '@/themes/awescnb'

class Demo extends AwesCnb {
    constructor() {
        super()
        super.init()
        this.init()
    }

    init() {
        this.hideLoading()
    }
    // to do something
}

new Demo()
```

&nbsp;&nbsp;用它来创建一个博客园主题,只需要继承包含这些插件的 class( awescnb ).就可以继承包括但不限于下面这些插件.或者也可以不继承这个 class 单独使用你需要的插件. 即使你继承了所有插件, 它们也能在博客园设置页面快速开启和关闭.

-   头部进度条
-   看板娘(模型)
-   音乐播放器
-   主题色
-   自定义背景图片或颜色
-   华丽的点击特效
-   自定义网站图标和标题
-   ...

5. 打开`config / webpack.base.js`并进行以下更改：

```js
entry:{
    index: './src/main.js',
    reacg: './src/themes/reacg/index.js',
+   demo: './src/themes/reacg/demo.js',
},
```

6. 运行命令

-   `npm i` 安装依赖项
-   `npm start` 进行本地开发

Templates 文件夹用于存储博客园的 HTML。运行`npm start`将在本地启动博客园首页。如果您想启动其他页面，请更改 config/webpack.dev.js

```js
new HtmlWebpackPlugin({
    filename: 'index.html',
-   template: 'src/templates/index.html',
+   template: 'src/templates/post.html', // Or other pages
    inject: 'body',
}),
```

## 贡献

1. fork 这个仓库.
2. `git checkout -b your-new-feature`创建您的功能分支.
3. `git commit -m 'Add some featureCommit` 提交您的代码.
4. `git push origin your-new-feature` 推送到分支.
5. 提交一个 a pull request.

## 计划

### 调整

-   merge.js √
-   在入口引入 merge √
-   themejs 从 mergejs 导入用户选项 x
-   组织目录 √
-   Window.useroptions √
-   调整 plugins 位置 √
-   根据 env 加载 http 文件 x
-   eslint √
-   prettier √
-   stylelint x
-   babel √
-   autoprefixer √
-   postcss-import √
-   cssnano √
-   sourcemap
-   在博客园中测试

### 通用插件

-   代码行号
-   代码高亮
-   文章目录
-   文章底部签名
-   弹幕
-   返回顶部
-   图标
-   显示评论列表的用户头像

### class awescnb

-   NProgress √
-   组织常用 css √
-   live2d √
-   点击特效 √
-   背景包括颜色和图像 √
-   主题颜色 √
-   favicon 和网站标题 √
-   音乐播放器 √
-   隐藏 loading √
-   在开发环境中导入 cnblog.common.css √
-   图片灯箱

### reacg

-   自定义二维码

## 联系

-   QQ:923665892
-   QQ 群：541802647
-   微信：wx923665892

## License

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".
