# @acnb/vite-plugin-serve-shared-assets

A Vite plugin to serve shared assets from a directory during development.

## Installation

```bash
npm install @acnb/vite-plugin-serve-shared-assets
```

## Usage

```js
import { ServeSharedAssetsPlugin } from '@acnb/vite-plugin-serve-shared-assets'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    ServeSharedAssetsPlugin(),
  ],
})
```

## How it works

This plugin adds a middleware to Vite's development server that serves files from `packages/shared-assets/public` when requests are made to the following paths:

- `/public/*` - Serves files from the root of the shared assets directory
- `/templates/*` - Serves files from the `templates` subdirectory
- `/js/*` - Serves files from the `js` subdirectory
- `/css/*` - Serves files from the `css` subdirectory
- `/images/*` - Serves files from the `images` subdirectory

## Development

### Build

To build the plugin for distribution:

```bash
npm run build
```

This will generate the distribution files in the `dist` directory.

### Test

To test the plugin during development:

```bash
npm run dev
```

## License

MIT
