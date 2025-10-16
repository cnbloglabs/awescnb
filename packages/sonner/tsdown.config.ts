import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'browser',
  entry: ['./src/index.tsx'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['preact'],
})
