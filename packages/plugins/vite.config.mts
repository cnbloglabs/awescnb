import { ServeSharedAssetsPlugin } from '@acnb/vite-plugin-serve-shared-assets'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [
    ServeSharedAssetsPlugin(),
  ],
  build: {
    // cssCodeSplit: true,
    // emptyOutDir: true,
    // lib: {
    //   formats: ['es'],
    //   entry: './example/index.js',
    //   name: 'geek',
    //   fileName: 'geek',
    // },
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //     nested: resolve(__dirname, 'project.html'),
    //   },
    // },
  },
})
