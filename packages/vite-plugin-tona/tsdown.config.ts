import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'node',
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
})
