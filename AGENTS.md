## 通用规则

- 禁止输出做了哪些修改！除非明确要求
- 禁止输出工作步骤描述！除非明确要求
- 禁止预览 Web 页面或执行 `npm run dev`！除非明确要求
- 禁止执行验证操作！除非明确要求
- 统一所有文件、目录命名方式为中划线命名，如 `file-name`
- 统一使用包管理器 `pnpm`
- 禁止使用 `switch case` 语句
- 禁止嵌套三目运算符
- 优先使用函数式编程范式
- 所有异步操作必须使用 `async/await`，禁止使用 `.then()`
- 禁止使用 `var` 声明变量，统一使用 `const` 和 `let`

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

## 图标使用规范

### 纯 JavaScript 操作
使用 `lucide` 包，通过 `createElement` 创建图标元素：

```ts
import { Moon } from 'lucide'

const MoonIcon = createElement(Moon)
```

### Preact 组件
使用 `lucide-preact` 包，直接作为组件使用：

```tsx
import { ChevronUp } from 'lucide-preact'

<ChevronUp />
```

### 图标属性规范
- 统一使用 `stroke-width={1}` 设置线条粗细
- 图标尺寸使用 `size-4`、`size-5` 等 Tailwind 类名
- 避免使用内联样式设置图标属性

## TypeScript 规范
- 禁止使用 `any` 类型
- 所有函数参数和返回值必须明确类型
- 使用 `interface` 定义对象类型，`type` 定义联合类型
- 组件 props 必须定义明确的类型接口
- 使用泛型提高代码复用性
- 优先使用 `const assertions` 和 `as const`
- 禁止使用 `@ts-ignore` 和 `@ts-expect-error`，除非绝对必要

## 代码质量规范

### 性能优化
- 合理使用 `useMemo` 和 `useCallback` 优化组件性能
- 避免在渲染过程中进行复杂计算

### 错误处理
- 所有异步操作必须包含错误处理
- 使用 Error Boundary 捕获组件错误
- 提供有意义的错误信息和用户反馈

### 测试规范
- 工具函数必须包含单元测试
- 使用 vitest 进行测试
- 测试覆盖率不低于 80%

### 文档规范
- 所有公共 API 必须包含 JSDoc 注释
- 组件 props 必须提供类型和默认值说明
- 复杂逻辑必须包含行内注释

## 插件实现规范

对于简单的 DOM 操作功能，可以通过编写插件实现。

### 插件目录结构

```md
plugin-name/
├── utils.ts          # 工具函数
├── index.css         # 样式文件
├── types.ts          # TypeScript 类型定义
└── index.tsx         # 插件入口
```

### 插件实现要求

- 使用原生 DOM API 进行操作
- 样式统一使用 Tailwind `@apply` 指令编写
- 插件必须支持 TypeScript 类型检查
- 避免直接修改 shared-assets 中的模板文件
- 插件应该具有可配置性和可扩展性
- 使用事件委托优化性能

### 插件示例

```ts
// plugin-name/index.tsx
export default function () {
  const el = document.querySelector('#element-id')
  if (el) {
    el.classList.add('btn')
  }
}
```

```css
/* plugin-name/index.css */
.btn {
  @apply text-2xl font-bold text-red-500;
}
```

## 项目特定规范

### 博客主题开发
- 所有主题必须支持响应式设计
- 必须兼容主流浏览器（Chrome、Firefox、Safari、Edge）
- 支持暗色模式和浅色模式切换
- 遵循无障碍访问标准（WCAG 2.1 AA）

### 文件组织
- 组件按功能模块组织，避免过深的嵌套
- 共享逻辑提取到 `utils` 目录
- 类型定义统一放在 `types.ts` 文件中
- 样式文件使用 CSS Modules 或 Tailwind 类名

### 状态管理
- 使用 Preact hooks 进行状态管理
- 复杂状态使用 `useReducer` 替代多个 `useState`
- 全局状态使用 Context API
- 避免 prop drilling，合理使用状态提升

### 路由和导航
- 使用声明式路由配置
- 支持浏览器前进后退
- 路由参数必须进行类型验证
- 提供面包屑导航

### 数据获取
- 使用 `useQueryDOM` hooks 获取 DOM 数据
- 实现数据缓存和重新验证机制
- 提供加载状态和错误状态
- 支持数据预加载

## 工具链配置

### 代码格式化
- 使用 Biome 进行代码格式化和 linting
- 配置自动格式化保存
- 统一使用单引号和分号
- 行宽限制为 80 字符

### 构建优化
- 使用 Vite 进行快速构建
- 优化包大小和加载性能
- 支持 Tree Shaking

### 开发体验
- 提供开发工具和调试信息
- 支持 TypeScript 严格模式
- 配置路径别名简化导入

## 皮肤特定规范

### themes/shadcn

#### 样式规范

themes/shadcn 是 shadcn ui 风格的博客皮肤，采用现代化的设计语言。

- 使用 Tailwind CSS V4 作为主要样式框架
- 禁止使用原生 CSS 属性，统一使用 Tailwind 类名
- 对于复杂的样式变体，使用 `class-variance-authority` (cva) 进行组织
- 使用 `cn()` 工具函数合并类名，避免样式冲突
- 响应式设计优先使用移动端优先的断点策略
- 暗色模式支持通过 `dark:` 前缀实现
- 动画使用 `tw-animate-css` 提供的预设动画

#### 组件实现规范

 对于  themes/shadcn 皮肤，优先考虑使用 Preact 组件方式实现功能与 UI，插件仅作为补充方案。

#### 组件目录结构

```md
component-name/
├── hooks.ts          # React hooks 逻辑
├── dom-hooks.ts      # useQueryDOM hooks
├── utils.ts          # 工具函数
├── types.ts          # TypeScript 类型定义
└── index.tsx         # 主组件实现
```

#### 组件实现要求

- 使用函数式组件，禁止使用类组件
- 组件必须支持 TypeScript 类型检查
- 使用 `cva` 管理样式变体，避免硬编码类名
- 组件 props 必须定义明确的接口
- 使用 `forwardRef` 支持 ref 传递
- 组件必须支持无障碍访问 (a11y)

### themes/geek

- 使用插件实现功能
