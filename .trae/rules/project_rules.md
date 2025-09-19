## 通用

- 反馈最少的内容给用户，比如不需要总结做了哪些修改
- 注意 tailwindcss 版本是 V4

## 运行原理

packages/shared-assets 放置了博客页面默认模板，包含预定义的 html、默认样式等，不可修改 shared-assets 下的任何文件！

修改皮肤前， 你需要至少先查看 packages/shared-assets/public/templates、packages/shared-assets/public/css， 以了解基础模板的 html 结构、样式。

`themes/*` 为皮肤所在位置，如 `themes/scribe` - scribe 主题。

运行 dev server 时，会自动注入 vite index.html 以及 packages/shared-assets，所有皮肤都基于博客页面默认模板实现。

你可以通过皮肤的 js 文件调整默认模板元素，或者根据模板中元素已有的选择器编写皮肤的 css。

启动 dev server 后，默认打开的是一个导航页，你如果需要查看博客皮肤的样式，你应该进入:

- /templates/home.html 首页
- /templates/post-markdown.html 文章内容页（markdown）
- /templates/post-tinymce5.html 文章内容页（tinymce5）
- /templates/post-tinymce.html 文章内容页（tinymce）
- /templates/photos.html 相册页
- /templates/photoview.html 照片预览页
- /templates/catalog.html 文章列表页
- /templates/category.html 文章分类页
- /templates/tags.html 标签列表页
- /templates/postarchive.html 随笔档案分类页

## 风格指南

- themes/reacg 是原创风格的博客皮肤
- themes/geek 是原创风格的博客皮肤
- themes/scribe 是 shadcn ui 默认风格的博客皮肤

## themes/scribe

在编写此皮肤的样式文件时， 禁止使用 css 属性，统一使用 tailwindcss V4 @apply 编写 css 属性, 如：

```css
h1 {
  @apply text-2xl font-bold text-red-500;
}
```

## 本地开发

```sh
npm run dev scribe
```
