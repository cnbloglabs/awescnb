import type { Plugin } from 'vite'

interface ServeSharedAssetsOptions {
  /**
   * The path to the shared assets directory
   * @default path.join(__dirname, '..', '..', 'shared-assets', 'public')
   */
  sharedAssetsPath?: string
}

export function ServeSharedAssetsPlugin(
  options?: ServeSharedAssetsOptions,
): Plugin
