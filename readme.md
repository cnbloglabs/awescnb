## Awescnb

![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg) ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg) ![forthebadge](https://forthebadge.com/images/badges/thats-how-they-get-you.svg) ![forthebadge](https://forthebadge.com/images/badges/powered-by-responsibility.svg) ![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg) ![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)

> **Awescnb**, awesome cnblog 使博客园更美好。

## 简介

**特性**

1. 本地调试

2. 模块化开发

3. 集成插件(仅导入即可)


**你可以用它做以下三件事**

1. 创建: 你可以使用它快速创建自己的博客园皮肤,最后打包生成的 js 文件,供你自己使用.

2. 分享: 你可以使用它快速创建一个博客园皮肤并将它贡献给项目,园友就能够切换到你的皮肤了.

3. 安装: 你可以安装这个项目中的皮肤在你的博客园.这不是一个简单的博客园皮肤,而是一个合集.安装之后,你可以快速切换其他皮肤.

**切换效果展示:**

文件较大，为了节省流量，[点击](https://guangzan.gitee.io/imagehost/blog/themechange.gif)跳转查看.

## 安装现成的皮肤

1.你的博客首页 -> 管理 -> 设置

2.设置博客默认皮肤为 **Custom**

3.使用 loading (不使用请忽略)

复制如下 html 粘贴到 **页首 HTML**.

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

复制如下 css 粘贴到 **页面定制 CSS**

```css
:root{--sk-size:60px;--sk-color:#ffb3cc}
#loading{position:fixed;top:0;left:0;right:0;height:100vh;display:flex;justify-content:center;align-items:center;
background-color: #fff;
background-image:url(https://guangzan.gitee.io/imagehost/awescnb/images/bg/cell.gif);z-index:99999}
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
              // 默认使用已经集成的皮肤 reacg
              // 在这里写入配置
              // 什么都不写代表使用默认配置
        });
</script>
```

6.保存.

> 如果你想继续定制化一些功能, [点我](https://guangzan.gitee.io/awescnb-docs) 跳转到宝宝都能看懂的文档.

## 目录

```
├─config webpack配置
├─dist 打包生成
└─src
    │ main.js
    ├─assets 静态文件
    ├─constants
    ├─plugins 公共插件
    ├─templates
    └─themes
        ├─awescnb 需要继承的 class
        │  │  index.js
        │
        └─demo 新增的皮肤
            │  index.js
```

## 创建一个皮肤

首先你需要将[本项目](https://gitee.com/guangzan/awescnb2.0) clone 到本地 `git clone https://gitee.com/guangzan/awescnb2.0.git`.

**1. 创建基本文件**

-   在 themes 文件夹下创建一个新文件夹, 例如你的皮肤叫做 demo, 你就创建 demo 文件夹.

-   在 demo 文件夹中创建 index.js.

-   在 demo 文件夹中创建 index.css.

-   在 demo/index.js 中粘贴以下代码.

```js
import './index.css' // 引入你的样式文件
import AwesCnb from '@/themes/awescnb' // 引入公共的类

class Demo extends AwesCnb {
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        // import plugins (use commonjs)
        // to do something
    }
}

new Demo()
```

**2. 更新配置以启动你的皮肤**

打开`config / options.js`：

```js
module.exports = {
    themeName: 'demo',
    template: 'post',
}
```

-   themeName 你创建的皮肤文件夹名称
-   template 本地开发要启动的页面 | 首页 -> 'index' | 随笔详情页 -> 'post' | 标签页 -> 'tag' | ...

**3. 构建和打包**

-   `npm start` 将在本地启动你的皮肤,进行调试.
-   `npm run build` 打包

项目打包会在 dist 目录下生成以下 js 文件:

-   demo.js 你的皮肤导入的所有依赖都会打包成这个文件
-   index.js 这个文件是用来根据用户所选的皮肤加载对应的 demo.js.
-   ...其他皮肤 js

如果你仅自己使用你构建的皮肤, 你只需要在你的博客园中引入 demo.js 即可.
如果你希望别人也能切换到你构建的皮肤, 欢迎分享你构建的皮肤.

**4. 安装你创建的皮肤**

安装你的皮肤步骤同上,你只需在安装过程中作如下变化:

```js
<script src="https://xxx/demo.js"></script> // 仅这一行有变化
<script>$.awesCnb({
              // 在这里写入配置
              // 什么都不写代表使用默认配置
        });
</script>
```

## 贡献

1. Fork 主仓库到自己账号成为副本仓库
2. 在副本仓库完成代码贡献
3. 将副本修改的内容给主仓库提交 Pull Requests

> 如果你有兴趣, 也可以加入仓库开发者行列.

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
-   config/options.js √
-   md 标签 √
-   测试单个文件 √
-   同步到 github
-   footer 版本同步
-   注释
-   rebuild tools/loadfile √

**通用备选插件**

-   自定义 body 背景图片\背景色透明度 √
-   图片灯箱 √
-   弹幕 √
-   点击特效 √
-   图片灯箱 √
-   live2d √
-   播放器 √
-   加载进度条 √
-   charts
-   typed
-   代码行号
-   代码高亮

**class awescnb**

-   NProgress √
-   组织常用 css √
-   live2d √
-   点击特效 √
-   背景包括颜色和图像 √
-   皮肤颜色 √
-   favicon 和网站标题 √
-   音乐播放器 √
-   隐藏 loading √
-   在开发环境中导入 cnblog.common.css √

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
-   弹幕阴影 √
-   图标跟随皮肤色

## Contact

-   QQ：923665892
-   QQ 群：541802647 (活跃)
-   微信：wx923665892

## Thanks

-   [GShang](https://www.cnblogs.com/gshang/)

## License

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".
