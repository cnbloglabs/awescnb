## Awescnb

![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg) ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg) ![forthebadge](https://forthebadge.com/images/badges/thats-how-they-get-you.svg) ![forthebadge](https://forthebadge.com/images/badges/powered-by-responsibility.svg) ![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg) ![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)

> **Awescnb**, awesome cnblog 使博客园更加美好。

## 简介

项目完全使用博客园自带的 jquery 和原生 js 构建, 没有引入第三方框架, 使用 webpack4 打包, 可本地调试. 同时集成常用博客插件(仅引入即可), 使构建博客园皮肤更简单.你可以用它做以下三件事:

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
    <div class="boxLoading"></div>
</div>
```

复制如下 css 粘贴到 **页面定制 CSS**

```css
#loading{position:fixed;width:100%;height:100%;background-color:#fff;z-index:999}
.boxLoading{width:50px;height:50px;margin:auto;position:absolute;left:0;right:0;top:0;bottom:0}
.boxLoading:before{content:'';width:50px;height:5px;background:#000;opacity:.1;position:absolute;top:59px;left:0;border-radius:50%;animation:shadow .5s linear infinite}
.boxLoading:after{content:'';width:50px;height:50px;background:#ffb3cc;animation:animate .5s linear infinite;position:absolute;top:0;left:0;border-radius:3px}
@keyframes animate{17%{border-bottom-right-radius:3px}25%{transform:translateY(9px) rotate(22.5deg)}50%{transform:translateY(18px) scale(1,.9) rotate(45deg);border-bottom-right-radius:40px}75%{transform:translateY(9px) rotate(67.5deg)}100%{transform:translateY(0) rotate(90deg)}}
@keyframes shadow{0%,100%{transform:scale(1,1)}50%{transform:scale(1.2,1)}}
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

首先你需要将[本项目](https://gitee.com/guangzan/awescnb2.0) clone 到本地.

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

## 联系

-   QQ：923665892
-   QQ 群：541802647 (活跃)
-   微信：wx923665892

## 感谢

[GShang](https://www.cnblogs.com/gshang/) 提供一套非常棒的皮肤

## 许可

- 你可以永久免费使用它构建皮肤, 但请不要基于此重新构建.

- 如果你引用了此项目的**代码**或**样式**请在您的项目说明中附上此项目的链接并作说明, 谢谢合作!

- 开源不易,且行且珍惜.


## 捐赠

最近帮小伙伴解决一些问题, 要请我喝水^_^, 一并在此感谢, 但本人并不接受任何捐赠. 如有时间,问题都会解决的.做这个项目完全是为了锻炼自己, 也为了一群博客园发烧友. 如果你有任何问题都可以到群里反馈,十分感谢!