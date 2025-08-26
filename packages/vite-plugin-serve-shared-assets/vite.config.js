import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ServeSharedAssetsPlugin',
      fileName: 'serve-shared-assets-plugin',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['node:fs', 'node:path', 'node:process'],
    },
    sourcemap: true,
  },
})
