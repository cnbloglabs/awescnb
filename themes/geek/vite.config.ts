import dynamicScriptExtension from '@acnb/vite-plugin-dynamic-script-extension'
import { ServeSharedAssetsPlugin } from '@acnb/vite-plugin-serve-shared-assets'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    dynamicScriptExtension(),
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
    copyPublicDir: false,
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
      fileName: () => 'geek.js',
    },
  },
})
