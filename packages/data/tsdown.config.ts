import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'node',
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  outputOptions: {
    file: 'dist/acnb-themes-data.es.js',
  },
  clean: true,
})
