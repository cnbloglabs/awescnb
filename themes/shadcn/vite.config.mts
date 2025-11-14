import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ServeSharedAssetsPlugin } from '@acnb/vite-plugin-serve-shared-assets'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'
import svgr from 'vite-plugin-svgr'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    dedupe: ['preact', 'preact/hooks', 'preact/compat'],
  },
  plugins: [
    preact(),
    ServeSharedAssetsPlugin(),
    tailwindcss(),
    analyzer({
      enabled: false,
    }),
    svgr(),
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
    port: 8081,
  },
  build: {
    copyPublicDir: false,
    minify: 'terser',
    cssCodeSplit: false,
    emptyOutDir: true,
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        // drop_console: true,
        // drop_debugger: true,
      },
    },
    lib: {
      formats: ['iife'],
      entry: resolve(__dirname, 'src/main.js'),
      name: 'shadcn',
      fileName: () => 'shadcn.js',
    },
    outDir: './dist',
    rollupOptions: {
      output: {
        assetFileNames: 'shadcn.[ext]',
      },
    },
  },
})
