// Vite plugin to serve shared assets in dev server
import fs from 'node:fs'
import path from 'node:path'

export function ServeSharedAssetsPlugin() {
  return {
    name: 'serve-shared-assets',
    configureServer(server) {
      const sharedAssetsPath = path.join(__dirname, '..', '..', 'shared-assets', 'public')

      // Serve static files from shared-assets/public directory
      server.middlewares.use((req, res, next) => {
        let filePath = null

        // Check if the request is for a file in /public (which will be served from shared-assets)
        if (req.url.startsWith('/public/')) {
          // Remove query parameters
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(sharedAssetsPath, urlWithoutQuery.replace('/public/', ''))
        } else if (req.url.startsWith('/templates/')) { // Also handle /templates/ requests
          // Remove query parameters
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(sharedAssetsPath, 'templates', urlWithoutQuery.replace('/templates/', ''))
        } else if (req.url.startsWith('/js/')) { // Also handle /js/ requests
          // Remove query parameters
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(sharedAssetsPath, 'js', urlWithoutQuery.replace('/js/', ''))
        } else if (req.url.startsWith('/css/')) { // Also handle /css/ requests
          // Remove query parameters
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(sharedAssetsPath, 'css', urlWithoutQuery.replace('/css/', ''))
        } else if (req.url.startsWith('/images/')) { // Also handle /images/ requests
          // Remove query parameters
          const urlWithoutQuery = req.url.split('?')[0]
          filePath = path.join(sharedAssetsPath, 'images', urlWithoutQuery.replace('/images/', ''))
        } else if (req.url === '/' || req.url.startsWith('/?') || req.url === '/index.html' || req.url.startsWith('/index.html?')) { // Handle root and index.html requests
          filePath = path.join(sharedAssetsPath, 'index.html')
          // console.log('Handling index.html request:', req.url, 'filePath:', filePath)
        }

        // Check if file exists
        if (filePath && fs.existsSync(filePath)) {
          // console.log('File exists:', filePath)
          // Set appropriate content type
          const ext = path.extname(filePath).toLowerCase()
          const mimeTypes = {
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
          // console.log('File served successfully:', filePath)
          return
        } else {
          // File exists but could not be served
          // console.error('File does not exist or could not be served:', filePath)
        }

        // If not handled, pass to next middleware
        next()
      })
    },
  }
}
