## Awescnb

![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg) ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg) ![forthebadge](https://forthebadge.com/images/badges/thats-how-they-get-you.svg) ![forthebadge](https://forthebadge.com/images/badges/powered-by-responsibility.svg) ![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg) ![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)

> ⛷ **Awescnb**, awesome cnblog 使博客园更加美好，为博客园发烧友而生！

## 简介

项目使用 webpack 构建. 集成大量博客插件. 可以用它做以下三件事:

1. 创建: 快速创建一个的博客园皮肤,通过打包生成的文件,供您使用.

2. 分享: 快速创建一个博客园皮肤并将它贡献给项目,园友就能够切换到您的皮肤了.

3. 安装: 在您的博客园安装这个项目中已经集成的皮肤.安装之后,可以快速切换其他皮肤.[点击查看切换效果](https://guangzan.gitee.io/imagehost/blog/themechange.gif).

## 构建

**config/options.js**

我把需要经常更改的配置单独抽离一个文件，这样做能节省多时间。

```js
module.exports = {
  themeName: 'reacg',
  template: 'post',
  eslint: true,
  sourceMap: false,
  openAnalyzer: false,
  cssExtract: false,
}
```

- themeName 创建的主题文件夹名称 (运行 npm start 会启动它)
- template 本地开发要启动的页面 'index' -> 首页 'post' -> 随笔详情页 'tag' -> 标签页 ...
- eslint 是否开启 eslint
- sourceMap 是否开启 sourcemap
- openAnalyzer 是否在 build 时开启 size 分析
- cssExtract 是否单独抽离 css

`cssExtract` 如果没有开启，build 会打包生成一个 dist， dist 下仅有 js 文件， 这是 css in js 的方式，通过 js 动态添加 `style` ； 若设为 true ，会在 dist 目录下另外创建一个 ext 文件夹， 下面放了皮肤的 js 和 css 文件。这两种方式供你灵活选择。

![](https://gitee.com/guangzan/imagehost/raw/master/markdown/awescnb-dist.png)

> 正如你所见， ext 下每一个皮肤对应 js 和 css 两个文件。

## 文档

-   [给我的博客园安装皮肤](https://guangzan.gitee.io/awescnb-docs/guide/use/install.html)
-   [我已经安装完毕，去配置一下](https://guangzan.gitee.io/awescnb-docs/guide/use/default.html)
-   [我想快速创建一个新皮肤](https://guangzan.gitee.io/awescnb-docs/guide/dev/dev.html)
-   [更新日志](https://guangzan.gitee.io/awescnb-docs/guide/dev/log.html)

## 贡献

1. fork 主仓库到自己账号成为副本仓库
2. 在副本仓库完成代码贡献
3. 将副本修改的内容给主仓库提交 Pull Requests

> 如果您有兴趣, 也可以加入仓库开发者行列.

## 联系

-   QQ 群：541802647 (活跃)

## 成员

-   [青墟](https://www.cnblogs.com/guoxinyu/)
-   [阿东]()
-   [GShang](https://www.cnblogs.com/gshang/)
-   [DIVMonster](https://www.cnblogs.com/guangzan/)
-   [ABing](https://www.cnblogs.com/A-Bing/)


## 许可

-   永久免费使用它构建皮肤和安装皮肤, 但请不要基于项目此重新构建项目并发布.
-   如果您引用了此项目的**代码**或**样式**请在您的项目中说明, 谢谢合作!

## 捐赠

1. 最近帮小伙伴解决一些问题, 要请我喝水, 一并在此感谢, 但本人并不接受任何捐赠，如需捐赠请捐赠给皮肤作者。
2. 欢迎加群，有问必答。有任何问题也都可以到群里反馈,十分感谢!

> 做这个项目是兴趣使然, 也为了一群博客园发烧友.
