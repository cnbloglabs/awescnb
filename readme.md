## What is this

[awescnb1.0](https://gitee.com/guangzan/awescnb)

## Differences between v1 and v2?

-   V2 use webpack v1 use gulp
-   V2 generates fewer files after packaging but Larger volume
-   V2 local debugging

## Usage

[awescnb](https://www.cnblogs.com/guangzan/p/12256583.html)

## How to run

If prod to load themejs in main.js ->

Themejs extends awescnb ->

Import mergejs to get options in themejs ->

To do something for customimg the theme in the theme js.

## To do

1. Adjustment

-   Create a js to merge default and user configurations √
-   Not import options in entrance √
-   Themejs import user options from mergejs x
-   Organize directory √
-   Window.useroptions √
-   Common plugins move to / plugins
-   According to process.env.NODE_ENV to load http files (Otherwise, the volume is too large) x

2. themes / awescnb (common class)

-   set NProgress (installed)
-   Set live2d √
-   Organize common css
-   Set click special effects √
-   Set body background include color & image √
-   Set theme color √
-   Set favicon & website title √
-   Build Aplayer √
-   Hide loading √
-   Import cnblog.common.css in the dev environment √

## Run the build

-   `npm i`
-   `npm start`
-   `npm run build`

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

## Contributing

1. Welcome to fork it!
2. Create your feature branch: git checkout -b your-new-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin your-new-feature.
5. Submit a pull request.

## License

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".

## contact

-   QQ: 923665892
-   QQ group: 541802647
-   wechat: wx923665892

## Thanks

-   [NProgress](http://ricostacruz.com/nprogress/)
-   [typed.js](https://github.com/mattboldt/typed.js)
-   ...
