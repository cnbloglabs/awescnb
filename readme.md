## Awescnb

![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg) ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg) ![forthebadge](https://forthebadge.com/images/badges/thats-how-they-get-you.svg) ![forthebadge](https://forthebadge.com/images/badges/powered-by-responsibility.svg) ![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg) ![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)

> **Awescnb**, awesome cnblog 使博客园更加美好。

## 简介

项目使用 webpack4 构建, 可本地调试 js 和 css, 同时集成大量常用博客插件(仅引入即可), 使构建博客园皮肤更简单.你可以用它做以下三件事:

1. 创建: 使用它快速创建一个的博客园皮肤,最后打包生成的 js 文件,供你自己使用.

2. 分享: 使用它快速创建一个博客园皮肤并将它贡献给项目,园友就能够切换到你的皮肤了.

3. 安装: 在你的博客园安装这个项目中现成的皮肤.安装之后,可以快速切换其他皮肤.[点击查看G切换效果](https://guangzan.gitee.io/imagehost/blog/themechange.gif).

## 安装现成的皮肤

1.你的博客首页 -> 管理 -> 设置

2.设置博客默认皮肤为 **Custom**

3.使用 loading (推荐使用,不使用请忽略)

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
:root {--sk-size: 60px;--sk-color: #ffb3cc;}
#loading {position: fixed;top: 0;left: 0;right: 0;height: 100vh;display: flex;justify-content: center;align-items: center;background-color: #fff;z-index: 99999;}
.sk-fold {width: var(--sk-size);height: var(--sk-size);position: relative;transform: rotateZ(45deg);}
.sk-fold-cube {float: left;width: 50%;height: 50%;position: relative;transform: scale(1.1);}
.sk-fold-cube:before {content: '';position: absolute;top: 0;left: 0;width: 100%;height: 100%;background-color: var(--sk-color);animation: sk-fold 2.4s infinite linear both;transform-origin: 100% 100%;}
.sk-fold-cube:nth-child(2) {transform: scale(1.1) rotateZ(90deg);}
.sk-fold-cube:nth-child(4) {transform: scale(1.1) rotateZ(180deg);}
.sk-fold-cube:nth-child(3) {transform: scale(1.1) rotateZ(270deg);}
.sk-fold-cube:nth-child(2):before {animation-delay: 0.3s;}
.sk-fold-cube:nth-child(4):before {animation-delay: 0.6s;}
.sk-fold-cube:nth-child(3):before {animation-delay: 0.9s;}
@keyframes sk-fold {0%,10% {transform: perspective(140px) rotateX(-180deg);opacity: 0;}25%,75% {transform: perspective(140px) rotateX(0);opacity: 1;}100%,90% {transform: perspective(140px) rotateY(180deg);opacity: 0;}}
```

4.<input type="checkbox" checked="checked" /> 禁用默认 css 样式

5.复制如下 js 粘贴到 **博客侧边栏公告** 如没开通 js 权限请先开通.

```js
<script src="https://guangzan.gitee.io/awescnb/index.js"></script>
<script>$.awesCnb({
              // 默认使用已经集成的皮肤 reacg
              // 在这里写入配置
              // 什么都不写代表使用默认配置
        });
</script>
```

6.保存.

> 如果你想继续定制化一些功能, [点我](https://guangzan.gitee.io/awescnb-docs) 跳转到宝宝都能看懂的文档.

## 创建一个皮肤

首先你需要将[本项目](https://gitee.com/guangzan/awescnb2.0) clone 到本地 `git clone https://gitee.com/guangzan/awescnb2.0.git`.

**1. 创建基本文件**

例如你要创建一个叫做 demo 的皮肤.

-   在 themes 文件夹下创建 demo 文件夹.

-   在 demo 文件夹中创建 index.js 和 index.css.

-   在 demo/index.js 中粘贴以下代码.

```js
import './index.css'
import AwesCnb from '@/themes/awescnb'

class Demo extends AwesCnb {
    // 继承该类以初始化
    constructor() {
        super()
        super.init(this.init)
    }

    init() {
        // import plugins (use commonjs)
        // to do something
        // 如果不知道到如何导入已经集成的插件
        // 可以打开 themes/reacg/index.js (示例皮肤)参考
    }
}

new Demo()
```

**2. 更新配置以启动本地服务调试皮肤**

打开`config / options.js`：

```js
// 无需直接更改webpack配置文件
// 直接更改这里的配置
// 其他配置我都帮你做好了

module.exports = {
    themeName: 'reacg', // 你创建的主题文件夹名称 (运行 npm start 会启动它) 'reacg' | 'gshang'
    template: 'post', // 本地开发要启动的页面 'index' -> 首页 'post' -> 随笔详情页 'tag' -> 标签页 ...
    eslint: true, // 是否开启 eslint
    sourceMap: true, //是否开启 sourcemap
    openAnalyzer: false, // build 时开启 size 分析
}
```

**3. 构建和打包**

1.运行`npm start` 将在本地启动你的皮肤,进行调试.

2.运行`npm run build` 打包

项目打包会在 dist 目录下生成以下 js 文件:

-   demo.js 你的皮肤打包后的 js (只需使用它)
-   index.js 这个文件是用来根据用户所选的皮肤加载对应的 demo.js. (无需关注)
-   其他皮肤 js (无需关注)

**4. 安装你创建的皮肤**

-   如果仅自己使用构建的皮肤, 只需要在你的博客园中引入打包后的 demo.js 即可.
-   如果你希望别人也能切换到你构建的皮肤, 欢迎分享你构建的皮肤.

安装你的皮肤步骤同上,你只需在安装过程中作如下变化:

```js
<script src="https://xxx/demo.js"></script> // 引入你打包后的js 或者将代码放入 script 标签内
<script>$.awesCnb({})</script>
```

## 文档

-   [如何创建新皮肤](https://guangzan.gitee.io/awescnb-docs/guide/dev/dev.html)

-   [如何配置已经安装的皮肤](https://guangzan.gitee.io/awescnb-docs/guide/use/default.html)

-   [所有配置](https://guangzan.gitee.io/awescnb-docs/guide/use/options.html#theme%EF%BC%88%E5%85%A8%E5%B1%80%E4%B8%BB%E9%A2%98%EF%BC%89)

-   [更新日志](https://guangzan.gitee.io/awescnb-docs/guide/dev/log.html)

-   [正在做什么](https://guangzan.gitee.io/awescnb-docs/guide/dev/todo.html)

## 贡献

1. Fork 主仓库到自己账号成为副本仓库
2. 在副本仓库完成代码贡献
3. 将副本修改的内容给主仓库提交 Pull Requests

> 如果你有兴趣, 也可以加入仓库开发者行列.

## Contact

-   QQ：923665892
-   QQ 群：541802647 (活跃)
-   微信：wx923665892

## Thanks

-   [GShang](https://www.cnblogs.com/gshang/)

## License

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".

> 开源不易,且行且珍惜.
