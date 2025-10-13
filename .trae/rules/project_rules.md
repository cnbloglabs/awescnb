## 通用

- 禁止总结做了哪些修改！一个字都不要说！除非明确要求
- 禁止输出工作步骤描述！少废话！除非明确要求
- 禁止预览 Web 页面！禁止预览 Web 页面！禁止预览 Web 页面！除非明确要求
- 禁止执行 npm run dev！除非明确要求
- 禁止执行验证操作！除非明确要求
- 已明确 tailwindcss 版本是 V4
- 统一所有文件、目录命名方式为中划线命名,如 file-name
- 统一使用包管理器 pnpm
- 禁止使用 switch case

## 运行原理

packages/shared-assets 放置了博客页面默认模板，包含预定义的 html、默认样式等，shared-assets 下的任何文件不可修改！

实现功能前，你可能需要先查看 packages/shared-assets/public/templates、packages/shared-assets/public/css， 以了解基础模板的 html 结构、样式。

运行 dev server 时，会通过 vite 插件自动注入 vite index.html 以及 packages/shared-assets，所有皮肤都基于博客页面默认模板实现。

你可以通过皮肤的 js 文件调整默认模板元素，或者根据模板中元素已有的选择器编写皮肤的 css。

`themes/*` 为皮肤所在位置，如 `themes/scribe` 放置 scribe 主题实现代码。启动 dev server 后，默认打开的是一个导航页面，你如果需要查看相关页面，应该进入:

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

## themes/scribe

themes/scribe 是 shadcn ui （默认主题）风格的博客皮肤。

如果要实现的功能，如果是独立且复杂的，比如 back-to-top，通过 preact 组件实现。样式统一使用 tailwind V4 实现，对于复杂的 class，使用 class-variance-authority 进行组织。如：`themes/scribe/src/plugins/top-nav-bar`

```md
top-nav-bar
├── component.tsx // preact 组件，从零实现一个功能
├── data.ts // 从模板 html 获取数据
├── index.css // 可选，功能相关样式， 一般用于隐藏模板元素
└── index.tsx // 插件入口，渲染获取 data 并渲染组件
```

如果要实现的功能，简单操作模板 dom 就可完成，使用纯 ts 实现，使用原生 dom api 操作 dom。在编写对应的样式时， 禁止使用 CSS 属性，统一使用 tailwind @apply 编写 css 属性, 如：

```ts
// plugin-name/index.tsx

export default function () {
  const el = document.querySelector('#element-id')
  el.classList.add('btn')
}
```

```css
/* plugin-name/index.css */

.btn {
  @apply text-2xl font-bold text-red-500;
}
```

> 即使功能简单，也应该优先考虑使用 preact 组件方式实现。

本地开发

```sh
npm run dev scribe
```

## 图标

对于纯 js 操作，图标使用 lucide

```ts
import { Moon } from 'lucide'

const MoonIcon = createElement(Moon)
```

对于 preact 组件，使用 lucide-preact

```tsx
import { ChevronUp } from 'lucide-preact'

<ChevronUp />
```


## TypeScript

- 禁止使用 any