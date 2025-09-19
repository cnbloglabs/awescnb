import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'node',
  entry: ['./src/index.ts'],
  format: ['esm'],
  outputOptions: {
    file: 'dist/acnb-themes-data.es.js',
  },
  clean: true,
})
