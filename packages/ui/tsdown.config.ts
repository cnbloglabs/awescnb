import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'browser',
  entry: ['./src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['preact'],
  treeshake: true,
  minify: false,
  sourcemap: true,
})
