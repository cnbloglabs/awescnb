# @tona/ui

Tona UI 组件库，提供可复用的 Preact 组件。

## 安装

```bash
pnpm add @tona/ui
```

## 组件

### Button

按钮组件，支持多种变体和尺寸。

```tsx
import { Button } from '@tona/ui'

// 基础用法
<Button>点击我</Button>

// 不同变体
<Button variant="destructive">删除</Button>
<Button variant="outline">轮廓</Button>
<Button variant="ghost">幽灵</Button>

// 不同尺寸
<Button size="sm">小按钮</Button>
<Button size="lg">大按钮</Button>
<Button size="icon">图标按钮</Button>

// 作为子组件渲染
<Button asChild>
  <a href="/link">链接按钮</a>
</Button>
```

### Slot

Slot 组件用于将 props 传递给子组件，类似于 Radix UI 的 Slot 组件。

```tsx
import { Slot } from '@tona/ui'

// 基础用法
<Slot className="custom-class">
  <button>按钮</button>
</Slot>

// 事件处理
<Slot onClick={() => console.log('clicked')}>
  <div>可点击的 div</div>
</Slot>
```

### cn

工具函数，用于合并 CSS 类名。

```tsx
import { cn } from '@tona/ui'

const className = cn('base-class', 'conditional-class', {
  'active-class': isActive
})
```

## 开发

```bash
# 开发模式
pnpm dev

# 构建
pnpm build
```

## 许可证

MIT
