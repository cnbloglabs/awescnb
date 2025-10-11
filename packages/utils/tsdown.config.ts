import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  clean: true,
  target: 'es2020',
  external: ['jquery'],
  shims: true,
})
