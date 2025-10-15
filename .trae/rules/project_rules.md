## 通用

- 禁止输出做了哪些修改！除非明确要求
- 禁止输出工作步骤描述！除非明确要求
- 禁止预览 Web 页面或执行 `npm run dev`！除非明确要求
- 禁止执行验证操作！除非明确要求
- tailwindcss 版本是 V4
- 统一所有文件、目录命名方式为中划线命名,如 file-name
- 统一使用包管理器 pnpm
- 禁止使用 `switch case`
- 禁止嵌套三目运算符

## 运行原理

packages/shared-assets 放置了博客页面默认模板，包含预定义的 html、默认样式等，shared-assets 下的任何文件不可修改！

实现功能前，你可能需要先查看 packages/shared-assets/public/templates、packages/shared-assets/public/css， 以了解基础模板的 html 结构、样式。

运行 dev server 时，vite 会通过插件自动注入 vite index.html 以及 packages/shared-assets，所有皮肤都基于博客页面默认模板实现。

`themes/*` 为皮肤所在位置，如 `themes/shadcn` 放置 shadcn 主题实现代码。启动 dev server 后，默认打开的是一个导航页面，你如果需要查看相关页面，应该进入:

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

## themes/shadcn

themes/shadcn 是 shadcn ui （默认主题）风格的博客皮肤。


#### 组件的实现

如果要实现的功能，如果是独立且复杂的，通过 preact 组件实现。

样式使用 tailwind V4 实现，对于复杂的 class，使用 `class-variance-authority` 进行组织。

组件目录遵循如下结构:

```md
component-name
├── hooks.ts // react hooks
├── dom-hooks.ts // useQueryDOM hooks
├── utils.ts // 工具函数
├── types.ts // ts 类型
└── index.tsx // preact 组件，从零实现一个功能
```

#### 插件的实现

如果要实现的功能，简单操作模板 DOM 就可完成，那么可以通过编写 plugin 实现。

操作 DOM 使用原生 DOM API。在编写样式时，禁止使用原生 CSS 属性，统一使用 tailwind @apply 编写。

plugin 目录遵循如下结构:

```md
plugin-name
├── utils.ts // 工具函数
├── index.css // 样式
├── types.ts // ts 类型
└── index.tsx // 功能入口
```

示例：

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
