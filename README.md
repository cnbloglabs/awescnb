<p align="center">
  <img src="./assets/tona.png" alt="Tona" width="138" />
</p>

<div align="center">
  <h1>Tona</h1>
  <p><em>Tona 是一个专为博客园（CNBlogs）设计的皮肤开发框架，提供了完整的皮肤开发工具链和丰富的插件生态。通过模块化的架构设计，开发者可以快速创建美观、功能丰富的博客皮肤。</em></p>
</div>

<p align="center">
  <a href="https://github.com/guangzan/tona/stargazers"><img src="https://img.shields.io/github/stars/guangzan/tona?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/guangzan/tona/releases"><img src="https://img.shields.io/github/v/tag/guangzan/tona?label=version&style=flat-square" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License"></a>
  <a href="https://github.com/guangzan/tona/commits"><img src="https://img.shields.io/github/commit-activity/m/guangzan/tona?style=flat-square" alt="Commits"></a>
</p>

## 使用皮肤

在博客园中使用皮肤请查看此[文档](https://www.yuque.com/r/awescnb/books)。

### Shadcn(WIP)

现代化的 shadcn UI 风格皮肤，采用 Preact + Tailwind CSS 构建。

### Geek

功能丰富的皮肤，保留博客园原生体验。

### Reacg

早期皮肤。

## 开发皮肤

初始化 Vite 项目

```bash
pnpm create vite my-cnblog-theme --template vanilla
```

添加 Tona Vite 插件

```bash
pnpm add -D @tona/vite
```

修改 Vite 配置

```tsx
import { defineConfig } from 'vite'
import tona from '@tona/vite'

export default defineConfig({
  plugins: [
    tona(),
  ],
})
```

安装 Tona

```bash
pnpm add tona
```

修改 src/main.ts

```ts
import { createTheme } from 'tona'
import './index.css'

function myPlugin() {
  console.log("Hello Tona!")
}

createTheme().use(myPlugin)
```

本地开发

```sh
pnpm dev
```

构建

```sh
pnpm build
```

## 贡献

欢迎贡献代码、报告问题或提出建议！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request
