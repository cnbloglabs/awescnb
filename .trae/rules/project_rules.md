## 通用

- 不要总结做了哪些修改！一个字都不要说！！！！
- 禁止输出工作步骤描述！少废话！！！
- 禁止打开预览！
- 我不需要你验证，你改完就任务完成了！
- 注意 tailwindcss 版本是 V4
- 禁止执行 npm run dev！
- 所有文件、目录命名方式统一采用中划线,如 file-name
- 包管理器统一使用 pnpm

## 运行原理

packages/shared-assets 放置了博客页面默认模板，包含预定义的 html、默认样式等，不可修改 shared-assets 下的任何文件！

实现功能前， 你可能需要先查看 packages/shared-assets/public/templates、packages/shared-assets/public/css， 以了解基础模板的 html 结构、样式。

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

## themes/scribe

themes/scribe 是 shadcn ui 默认风格的博客皮肤。

如果要实现的功能，是独立的，比如 back-to-top，通过 preact 组件实现，样式统一使用 tailwind V4 实现，对于复杂的 class，使用 class-variance-authority。 如：

```tsx
// modules/feature/index.tsx
import register from 'preact-custom-element'

function MyComponent(props: { name: string }) {
  return (
    <div className="text-red-500 text-4xl">
      我的名字叫
      {props.name}
      。
    </div>
  )
}

register(MyComponent, 'my-component', ['name'], { shadow: false })

export default function () {
  const container = document.body
  container.innerHTML += `<my-component name="张三"></my-component>`
}
```

如果要实现的功能，需要操作 dom，比如修改默认 html 模板，使用纯 ts 实现，使用原生 dom api 操作 dom。在编写对应的样式时， 禁止使用 css 属性，统一使用 tailwind @apply 编写 css 属性, 如：

```ts
// modules/feature/index.tsx

export default function () {
  const el = document.querySelector('#element-id')
  el.classList.add('btn')
}
```

```css
/* modules/feature/index.css */
.btn {
  @apply text-2xl font-bold text-red-500;
}
```

## 本地开发

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

<ChevronUp className="w-5 h-5" />
```
