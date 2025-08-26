import { ServeSharedAssetsPlugin } from '@acnb/vite-plugin-serve-shared-assets'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    ServeSharedAssetsPlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  server: {
    open: true,
    port: 8080,
  },
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    emptyOutDir: true,
    terserOptions: {
      format: {
        comments: false,
      },
    },
    lib: {
      formats: ['iife'],
      entry: './src/main.js',
      name: 'theme',
      fileName: () => 'reacg.js',
    },
  },
})
