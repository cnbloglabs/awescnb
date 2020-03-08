## To do

1. 调整

-   导出入口文件和 themejs | 入口文件 import 合并配置的 js | themejs import 合并配置的 js √
-   目录调整

2. class awescnb

-   nprogress 控制加载(installed todo -> 显示隐藏 )
-   live2d (find a npm package)
-   click (find a npm package)
-   整理 awescnb css 文件
-   bodyBackground √
-   themeColor √
-   设置网站图标标题 √
-   音乐播放器 √
-   hideLoading √

## What is this

[awescnb1.0](https://gitee.com/guangzan/awescnb)

## Differences between v1 and v2?

-   v2 use webpack v1 use gulp
-   V2 generates fewer files after packaging but Larger volume

## Usage

[awescnb](https://www.cnblogs.com/guangzan/p/12256583.html)

## How to run

main.js if prod to load themejs ->

themejs extends awescnb ->

import mergejs to get options in themejs ->

to do something from custom theme in theme js.

## Run the build

**Run locally**

templates 下的 html 文件是博客园的 html, `npm start` 默认启动的是博客园首页,如果你要启动其他页面请更改
config / webpack.dev.js

```js
new HtmlWebpackPlugin({
    filename: 'index.html',
-   template: 'src/templates/index.html',
+   template: 'src/templates/post.html', // 或者其他页面
    inject: 'body',
}),
```

-   `npm start`
-   `npm run build`



## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b your-new-feature
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin your-new-feature
5. Submit a pull request

## concat

-   QQ 群: 541802647

## Thanks

-   [NProgress]()
-   ...
