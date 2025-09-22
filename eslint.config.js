import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    pnpm: true,
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
    ignores: [
      './docs/.vitepress',
    ],
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
  },
)
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
