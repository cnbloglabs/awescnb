# vite-plugin-tona

Vite plugin for Tona themes - combines dynamic script extension and shared assets serving.

## Installation

```bash
npm install @tona/vite
```

## Usage

```ts
import tona from '@tona/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tona()
  ]
})
```

## Features

- Automatically detects main.ts or main.js files and replaces script src in HTML
- Serves shared assets from public directory during development
- Works in both development and build modes

## Options

```ts
interface TonaPluginOptions {
  /**
   * Default script source path when neither main.ts nor main.js exists
   * @default '/src/main.js'
   */
  defaultScriptSrc?: string
  /**
   * Base directory to resolve main files from
   * @default process.cwd()
   */
  baseDir?: string
  /**
   * The path to the shared assets directory
   * @default path.join(__dirname, '..', 'public')
   */
  sharedAssetsPath?: string
}
```
