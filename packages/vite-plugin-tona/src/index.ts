import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import type { Plugin, ViteDevServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface MimeTypes {
  [key: string]: string
}

export interface TonaPluginOptions {
  /**
   * Default script source path when neither main.ts nor main.js exists
   * @default '/src/main.js'
   */
  defaultScriptSrc?: string
  /**
   * Base directory to resolve main files from
   * @default process.cwd()
   */
  baseDir?: string
  /**
   * The path to the shared assets directory
   * @default path.join(__dirname, '..', 'public')
   */
  sharedAssetsPath?: string
}

/**
 * Vite plugin for Tona themes - combines dynamic script extension and shared assets serving
 */
export default function tona(options: TonaPluginOptions = {}): Plugin {
  const {
    defaultScriptSrc = '/src/main.js',
    baseDir = process.cwd(),
    sharedAssetsPath,
  } = options

  // Default path to shared assets
  const assetsPath = sharedAssetsPath || path.join(__dirname, '..', 'public')

  return {
    name: 'vite-plugin-tona',

    transformIndexHtml(html) {
      // Dynamic script extension: check main.ts or main.js exists
      const jsPath = path.resolve(baseDir, 'src/main.js')
      const tsPath = path.resolve(baseDir, 'src/main.ts')
      let scriptSrc = defaultScriptSrc

      if (fs.existsSync(tsPath)) {
        scriptSrc = '/src/main.ts'
      } else if (fs.existsSync(jsPath)) {
        scriptSrc = '/src/main.js'
      }

      // Replace script src in HTML
      return html.replace(
        /<script type="module" src="[^"]*"><\/script>/,
        `<script type="module" src="${scriptSrc}"></script>`,
      )
    },

    configureServer(server: ViteDevServer) {
      // Serve static files from shared-assets/public directory
      server.middlewares.use((req, res, next) => {
        let filePath: string | null = null

        // Check if the request is for a file in /public (which will be served from shared-assets)
        if (req.url?.startsWith('/public/')) {
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(
            assetsPath,
            urlWithoutQuery!.replace('/public/', ''),
          )
        } else if (req.url?.startsWith('/templates/')) {
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(
            assetsPath,
            'templates',
            urlWithoutQuery!.replace('/templates/', ''),
          )
        } else if (req.url?.startsWith('/js/')) {
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(
            assetsPath,
            'js',
            urlWithoutQuery!.replace('/js/', ''),
          )
        } else if (req.url?.startsWith('/css/')) {
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(
            assetsPath,
            'css',
            urlWithoutQuery!.replace('/css/', ''),
          )
        } else if (req.url?.startsWith('/images/')) {
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(
            assetsPath,
            'images',
            urlWithoutQuery!.replace('/images/', ''),
          )
        } else if (
          req.url === '/' ||
          req.url?.startsWith('/?') ||
          req.url === '/index.html' ||
          req.url?.startsWith('/index.html?')
        ) {
          filePath = path.join(assetsPath, 'index.html')
        }

        // Check if file exists
        if (filePath && fs.existsSync(filePath)) {
          // Set appropriate content type
          const ext = path.extname(filePath).toLowerCase()
          const mimeTypes: MimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
          }

          const contentType = mimeTypes[ext] || 'application/octet-stream'
          res.setHeader('Content-Type', contentType)

          // Read and serve the file
          const fileStream = fs.createReadStream(filePath)
          fileStream.pipe(res)
          return
        }

        // If not handled, pass to next middleware
        next()
      })
    },
  }
}
