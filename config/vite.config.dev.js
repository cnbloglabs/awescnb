import { resolve } from 'path'
import { defineConfig } from 'vite'
import { injectHtml } from 'vite-plugin-html'
import { themeName, openBrowser } from '../awescnb.config'

const injectHtmlOptions = {
    injectData: {
        injectScript: `<script type="module" src="../../src/themes/${themeName}/index.js"></script>`,
    },
}

export default defineConfig({
    resolve: {
        alias: {
            assets: resolve('src/assets'),
            awescnb: resolve('src/awescnb'),
            options: resolve('src/options'),
            constants: resolve('src/constants'),
            plugins: resolve('src/plugins'),
            style: resolve('src/style'),
            utils: resolve('src/utils'),
        },
    },
    plugins: [
        {
            ...injectHtml(injectHtmlOptions),
            apply: 'serve',
        },
    ],
    server: {
        port: 3000,
        open: openBrowser,
    },
})
