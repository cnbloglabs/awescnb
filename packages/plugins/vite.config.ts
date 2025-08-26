import { defineConfig } from 'vite'
import { injectHtml } from 'vite-plugin-html'

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
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
  plugins: [
    {
      ...injectHtml({
        injectData: {
          injectScript: '<script type="module" src="../../example/index.js"></script>',
        },
      }),
      apply: 'serve',
    },
  ],
})
