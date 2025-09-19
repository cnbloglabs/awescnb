import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'browser',
  entry: ['./src/index.ts'],
  format: ['iife'],
  outputOptions: {
    file: 'dist/loader.min.js',
  },
  minify: true,
})
