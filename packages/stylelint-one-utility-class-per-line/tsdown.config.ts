import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'node',
  entry: ['./src/index.mjs'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
})
