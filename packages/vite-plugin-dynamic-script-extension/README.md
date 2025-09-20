# vite-plugin-dynamic-script-extension

Vite plugin for dynamic script extension - automatically detects and uses main.ts or main.js files.

## Installation

```bash
npm install @acnb/vite-plugin-dynamic-script-extension
```

## Usage

```ts
import dynamicScriptExtension from '@acnb/vite-plugin-dynamic-script-extension'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dynamicScriptExtension()
  ]
})
```

## Features

- Automatically detects main.ts or main.js files
- Replaces script src in HTML during transform
- Works in both development and build modes
