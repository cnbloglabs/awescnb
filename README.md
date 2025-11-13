# awescnb

> 一个现代化的博客园皮肤开发框架，提供丰富的皮肤和插件系统

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.18.0-brightgreen)](https://nodejs.org/)
[![pnpm Version](https://img.shields.io/badge/pnpm-%3E%3D8.0.0-orange)](https://pnpm.io/)

awescnb 是一个专为博客园（CNBlogs）设计的皮肤开发框架，提供了完整的皮肤开发工具链和丰富的插件生态。通过模块化的架构设计，开发者可以快速创建美观、功能丰富的博客皮肤。[文档站点](https://www.yuque.com/awescnb)

## ✨ 特性

- 🎨 **丰富的皮肤库** - 提供多个精心设计的皮肤，支持自定义配置
- 🔌 **强大的插件系统** - 内置 30+ 实用插件，轻松扩展皮肤功能
- 📦 **模块化架构** - 核心功能封装为独立包，便于复用和维护
- 🛠️ **完善的开发工具** - 基于 Vite 的快速开发体验，支持热更新
- 🎯 **TypeScript 支持** - 完整的类型定义，提供更好的开发体验
- 📱 **响应式设计** - 所有皮肤均支持桌面、平板和移动设备
- 🌗 **深色模式** - 内置深色/浅色模式切换支持
- ⚡ **性能优化** - 代码分割、懒加载等优化策略

## 📦 项目结构

```
awescnb/
├── packages/             # 核心包
│   ├── core/             # 核心 API，提供皮肤创建和插件系统
│   ├── loader/           # 皮肤加载器，用于加载和初始化皮肤
│   ├── options/          # 配置选项管理
│   ├── plugins/          # 插件系统，包含 30+ 实用插件
│   ├── hooks/            # React Hooks 工具库
│   ├── utils/            # 工具函数库
│   ├── api/              # API 请求封装
│   ├── ui/               # UI 组件库
│   ├── shared-assets/    # 共享静态资源（模板、样式、图片等）
│   └── ...
├── themes/               # 皮肤包
│   ├── geek/             # geek 皮肤
│   ├── reacg/            # reacg 皮肤
│   └── shadcn/           # shadcn UI 风格皮肤
├── docs/                 # 项目文档
└── scripts/              # 构建和开发脚本
```

## 🚀 快速开始

### 开发

```sh
# 构建所有核心包
pnpm build:pkg
```

```sh
# 启动开发服务器（会显示皮肤选择界面）
pnpm dev

# 指定特定皮肤进行开发
pnpm dev geek
pnpm dev reacg
pnpm dev shadcn
```

## 📚 核心包介绍

### Core

核心 API 包，提供皮肤创建和插件系统的基础能力。

**主要 API：**

- `createTheme()` - 创建皮肤实例
- `defineOptions()` - 定义配置选项

```javascript
import { createTheme, defineOptions } from '@acnb/core'

// 创建皮肤实例
const theme = createTheme()

// 定义配置选项
const getBackgroundOptions = defineOptions('bodyBackground', {
  enable: false,
  value: '',
  opacity: 0.85,
  repeat: false,
})
```

### Plugins

插件系统，提供 30+ 实用插件，包括：

- 🎨 **样式插件** - 背景、深色模式、皮肤色等
- 📝 **内容插件** - 代码高亮、图片预览、目录生成等
- 🎯 **交互插件** - 工具栏、表情选择器、点击特效等
- 🎵 **媒体插件** - 音乐播放器、Live2D 模型等
- 🔧 **工具插件** - 通知、二维码、签名等

### Hooks

React Hooks 工具库，提供常用的 DOM 操作和事件处理 Hooks。

- `useQueryDOM` - DOM 查询 Hook
- `useEventCallback` - 事件回调 Hook
- `useAjaxComplete` - AJAX 完成监听 Hook
- ...

### shared-assets

共享静态资源包，博客园默认 custom 皮肤模板，包含所有皮肤共享的：

- HTML 模板文件
- CSS 样式文件
- JavaScript 工具库
- 图片资源

**注意：** `shared-assets` 下的文件不可修改，所有皮肤基于这些基础模板实现。

## 🎨 皮肤

### Reacg

早期皮肤，功能丰富，支持多种自定义配置。

### Geek

极客风格皮肤，简洁现代的设计风格，致力于保留博客园原版体验。

### Shadcn

基于 Shadcn UI 设计语言打造的现代化皮肤，采用 Preact + Tailwind CSS 构建。

## 🛠️ 构建

```sh
# 构建特定皮肤
cd themes/shadcn && pnpm build
```

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！

### 贡献流程

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和用户！
