<p align="center">
  <img src='https://guangzan.gitee.io/imagehost/awescnb/logo.png' />
</p>

# Awescnb

  <img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg">
  <img src="https://img.shields.io/badge/-jquery-lightgrey">
  <img src="https://img.shields.io/badge/-gulp-orange">
  <img src="https://img.shields.io/badge/-live2D-yellow">
  <img src="https://img.shields.io/badge/-anime-red">
  <img src="https://img.shields.io/badge/-APlayer-informational">
  <img src="https://img.shields.io/badge/-flexible-success">
  <img src="https://img.shields.io/badge/-highlight-yellowgreen">
  <img src="https://img.shields.io/badge/-linenumber-important">
  <img src="https://img.shields.io/badge/-scrollgress-critical">
  <img src="https://img.shields.io/badge/-music-informational">
  <img src="https://img.shields.io/badge/-custom-ff69b4">
  <img src="https://img.shields.io/badge/-responsive-9cf">

> **Awescnb**, awesome cnblog 使博客园看起来更好。

## 简介

通过 webpack 构建, 可以在本地启动服务调试 css 和 js, 并且集成了大量博客园皮肤插件,使你快速构建一款博客园皮肤.

1. 你可以使用它快速创建自己的博客园皮肤,最后打包生成的 js 文件,供你自己使用.

2. 你可以使用它创建一个博客园皮肤.并将它贡献给项目,园友就能够切换到你的皮肤了.

3. 你可以安装这个项目中的皮肤在你的博客园.这不是一个简单的博客园皮肤,而是一个合集.安装之后,你可以快速切换其他皮肤.

**切换效果展示:**

文件较大，为了节省流量，[点击](https://guangzan.gitee.io/imagehost/blog/themechange.gif)跳转查看.

## 安装

1.你的博客首页 -> 管理 -> 设置

2.设置博客默认皮肤为 **Custom**

3.复制如下 css 粘贴到 **页面定制 CSS**

```css
:root{--sk-size:60px;--sk-color:#ffb3cc}
#loading{position:fixed;top:0;left:0;right:0;height:100vh;display:flex;justify-content:center;align-items:center;background-image:url(https://guangzan.gitee.io/imagehost/awescnb/images/bg/cell.gif);z-index:99999}
.sk-fold{width:var(--sk-size);height:var(--sk-size);position:relative;transform:rotateZ(45deg)}
.sk-fold-cube{float:left;width:50%;height:50%;position:relative;transform:scale(1.1)}
.sk-fold-cube:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--sk-color);animation:sk-fold 2.4s infinite linear both;transform-origin:100% 100%}
.sk-fold-cube:nth-child(2){transform:scale(1.1) rotateZ(90deg)}
.sk-fold-cube:nth-child(4){transform:scale(1.1) rotateZ(180deg)}
.sk-fold-cube:nth-child(3){transform:scale(1.1) rotateZ(270deg)}
.sk-fold-cube:nth-child(2):before{animation-delay:.3s}
.sk-fold-cube:nth-child(4):before{animation-delay:.6s}
.sk-fold-cube:nth-child(3):before{animation-delay:.9s}
@keyframes sk-fold{
0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}
25%,75%{transform:perspective(140px) rotateX(0);opacity:1}
100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}
```

4.<input type="checkbox" checked="checked" /> 禁用默认 css 样式

5.复制如下 js 粘贴到 **博客侧边栏公告** 如没开通 js 权限请先开通.

```js
<script src="https://guangzan.gitee.io/awescnb2.0/index.js"></script>
<script>$.awesCnb({
              // 在这里写入配置
              // 什么都不写代表使用默认配置
        });
</script>
```

6.复制如下 html 粘贴到 **页首 HTML**.

```html
<div id="loading">
    <div class="sk-fold">
        <div class="sk-fold-cube"></div>
        <div class="sk-fold-cube"></div>
        <div class="sk-fold-cube"></div>
        <div class="sk-fold-cube"></div>
    </div>
</div>
```

7.保存.

> 如果你想继续定制化一些功能, [点我](https://guangzan.gitee.io/awescnb-docs) 跳转到宝宝都能看懂的文档.

## 目录

这里只简单的罗列基本的项目目录,让你清楚它是怎么运行的.如果你有问题或建议欢迎交流.

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
    ├─templates 博客园的html
    │
    └─themes
        ├─awescnb 其他皮肤继承的 class
        │  │  index.js
        │
        └─reacg 新增的皮肤
            │  index.js
```

## 命令

-   `npm install`
-   `npm start`
-   `npm run build`

## 创建新的皮肤

首先你需要将[项目](https://gitee.com/guangzan/awescnb2.0) clone 到本地 `git clone https://gitee.com/guangzan/awescnb2.0.git`.

1. **创建基本文件**

- 在 themes 文件夹下创建一个新文件夹,比如 demo.

- 在 demo 文件夹中创建 index.js.

- 在 demo 文件夹中创建 index.css. 皮肤样式

- 在 demo/index.js 中粘贴以下代码.

```js
import './index.css' // 引入你的样式文件
import AwesCnb from '@/themes/awescnb' // 引入公共的类

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

1. **更改配置以你的启动主题**

打开`config / webpack.base.js`并进行以下更改：

```js
entry:{
    index: './src/main.js',
-   reacg: './src/themes/reacg/index.js',
+   demo: './src/themes/reacg/demo.js',
},
```

3. **在本地启动**

-   `npm i` 安装项目依赖
-   `npm start` 进行本地开发

运行`npm start`将在本地启动博客园首页。如果您想启动其他页面，请将 `config/webpack.dev.js`作如下更改:

```js
new HtmlWebpackPlugin({
    filename: 'index.html',
-   template: 'src/templates/index.html',
+   template: 'src/templates/post.html', // Or other pages
    inject: 'body',
}),
```

1. **打包**

-   `npm run build` 打包

项目打包会在 dist 文件夹下生成两个 js 文件:

-   index.js 这个文件是用来根据用户所选的主题加载对应的 theme.js.
-   theme.js 你的主题导入的所有依赖都会打包成这个文件

如果你仅自己使用你构建的皮肤, 你只需要在你的博客园中引入 theme.js 即可,安装你的主题步骤同上,你只需要作如下变化:

```js
<script src="https://xxx/[theme].js"></script>
<script>$.awesCnb({
              // 在这里写入配置
              // 什么都不写代表使用默认配置
        });
</script>
```

## 贡献

1. Fork 主仓库到自己账号成为副本仓库
2. 在副本仓库完成代码贡献（添加、删除、修改代码等等）
3. 将副本修改的内容给主仓库提交 PR ( Pull Requests )

> 如果你有兴趣加入项目, 可以直接加入仓库开发者行列.

## Todo

**项目**

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
-   bug 打包多出一个 js √
-   可单独使用 themejs √
-   sourcemap √
-   测试单个文件
-   同步到github
-   footer 版本同步
-   注释
-   md标签

**通用备选插件**

-   自定义 body 背景图片\背景色透明度 √
-   图片灯箱 √
-   代码行号
-   代码高亮
-   弹幕

**class awescnb**

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
-   config/options.js

**reacg**(示例皮肤)

-   评论图片样式
-   自定义二维码 √
-   自定义头像 √
-   icons √
-   footer √
-   移动端菜单 √
-   图标 √
-   自定义 body 背景图片\背景色透明度 √
-   图片灯箱 √
-   代码行号 √
-   代码高亮 √
-   文章目录 √
-   文章底部签名 √
-   弹幕 √
-   返回顶部 √
-   签名 √
-   示例音乐丢失 ... √
-   backtotop 定位逻辑 √
-   夜间判断逻辑 √
-   优化切换暗色/亮色模式效果和逻辑 √
-   bug highlight 无效 √
-   显示评论区头像 增加轮询次数 √
-   移动端默认禁用点击特效 √
-   signature 样式优化 √
-   移动端隐藏顶部订阅按钮 √
-   调整移动端字体大小 √
-   bug -> themeColor double √
-   图标跟随主题色

## Contact

-   QQ：923665892
-   QQ 群：541802647 (活跃)
-   微信：wx923665892

## Thanks

-   [GShang](https://www.cnblogs.com/gshang/)

## License

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".
