# @acnb/vite-plugin-serve-shared-assets

A Vite plugin to serve shared assets from a directory during development.

## Installation

```bash
npm install @acnb/vite-plugin-serve-shared-assets
```

## Usage

```ts
import { ServeSharedAssetsPlugin } from '@acnb/vite-plugin-serve-shared-assets'
import { defineConfig } from 'vite'
```

```ts
export default defineConfig({
  plugins: [
    ServeSharedAssetsPlugin()
  ]
})
```

### Options

```ts
ServeSharedAssetsPlugin({
  // The path to the shared assets directory
  sharedAssetsPath: path.join(__dirname, 'shared-assets', 'public')
})
```

## License

MIT
