# awescnb

博客园皮肤。

## 项目结构

- `packages/*` - 核心包
  - `core` - 核心 API，用于创建博客园主题
  - `loader` - 皮肤加载器
  - `options` - 配置选项管理
  - `plugins` - 插件系统
  - `shared-assets` - 共享静态资源
  - `themes` - 主题数据
  - `vite-plugin-serve-shared-assets` - Vite 插件，用于在开发过程中提供共享资源
- `themes/*` - 主题包
  - `geek` - Geek 主题
  - `reacg` - Reacg 主题
- `docs` - 文档
- `scripts` - 脚本文件

## 核心包介绍

### @acnb/core

这是项目的核心包，提供了创建博客园主题的 API。

主要功能：

- `createTheme` - 创建主题实例
- `defineOptions` - 定义配置选项
- 插件系统 - 支持扩展主题功能

### @acnb/loader

皮肤加载器，用于加载和初始化博客园皮肤。

### 共享资源

`packages/shared-assets` 目录包含所有主题共享的静态资源，这样可以消除重复并确保主题间的一致性。

## 开发指南

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 开发主题

```bash
# 启动主题开发服务器
pnpm dev

# 或者指定特定主题
pnpm dev geek
pnpm dev reacg
```

### 构建

```bash
# 构建所有包
pnpm build:pkg

# 构建插件
pnpm build:plugins

# 构建文档
pnpm docs:build
```

### 其他命令

```bash
# 代码检查
pnpm lint

# 代码检查并自动修复
pnpm lint:fix

# 类型检查
pnpm typecheck

# 运行测试
pnpm test
```

## 贡献

欢迎提交 Pull Request 或 Issue 来改进项目。

1. Fork 项目
2. 创建您的特性分支
3. 提交您的修改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT
