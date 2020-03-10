## What is this

You can use it to create a cnblog theme of your own, support local debugging, and share the created themes with others. You can refer to [awescnb1.0](https://gitee.com/guangzan/awescnb)

## Differences between v1 and v2?

-   V2 use webpack, v1 use gulp.
-   V2 generates fewer files after packaging but Larger volume.
-   V2 can be debugged locally.

## Why use

If you install it on your blog, you can quickly switch to another theme. If you want to use it to create a theme, you can use the sealed features in just a few lines of code, including but not limited to

-   NProgress
-   live2d
-   music player
-   theme color
-   body background
-   set click effects
-   custom website title and favicon
-   ...

## Install

[awescnb](https://www.cnblogs.com/guangzan/p/12256583.html)

## How to run

Main.js load the corresponding JS according to your configured theme name.

## Contributing

1. Welcome to fork it!
2. Create your feature branch: git checkout -b your-new-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin your-new-feature.
5. Submit a pull request.

## How to start

1. Create a new folder under the themes folder, such as demo.
2. Create index.js in the demo folder.
3. Create index.css in the demo folder.
4. Paste the following code in demo / index.js.

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

5. Open `config / webpack.base.js` and make the following changes:

```
entry:{
    index: './src/main.js',
    reacg: './src/themes/reacg/index.js',
+   demo: './src/themes/reacg/demo.js',
},
```

6. Run command

-   `npm i` Installation dependency
-   `npm start` Local development

The Templates folder is used to store the HTML of the cnblog. Running 'npm start' will start the index.html. If you want to start other pages, please change it config / webpack.dev.js

```js
new HtmlWebpackPlugin({
    filename: 'index.html',
-   template: 'src/templates/index.html',
+   template: 'src/templates/post.html', // Or other pages
    inject: 'body',
}),
```

## To do

### Adjustment

-   Create a js to merge default and user configurations √
-   Not import options in entrance √
-   Themejs import user options from mergejs x
-   Organize directory √
-   Window.useroptions √
-   Common plugins move to / plugins
-   According to process.env.NODE_ENV to load http files (Otherwise, the volume is too large) x

### plugins (common plugins)

-   lineNumbers
-   highLight
-   catalog
-   postSignature
-   barrage
-   back2top -> simple / complex
-   icons
-   show user avatar of comment list

### themes / awescnb (common class)

-   set NProgress (installed) √

If you do not use nprogress to walk through the hide loading func, if you use nprogress, you will not walk through the hideloading func in nprogress

-   Organize common css √
-   Set live2d √
-   Set click special effects √
-   Set body background include color & image √
-   Set theme color √
-   Set favicon & website title √
-   Build Aplayer √
-   Hide loading √
-   Import cnblog.common.css in the dev environment √
-   imagebox

### themes / reacg (Theme created by user)

-   qrcode
-   avatar
-   github
-   links

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
