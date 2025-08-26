import antfu from '@antfu/eslint-config'

export default antfu({
  pnpm: true,
  formatters: {
    markdown: true,
    css: true,
  },
  ignores: [
    './docs/.vitepress',
  ],
})
  .overrideRules({
    'style/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
  })
  .prepend({
    languageOptions: {
      globals: {
        $: true,
      },
    },
  })
