import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { defineConfigWithTheme } from 'vitepress'
import {
  font,
  ogImage,
  ogUrl,
  vitestDescription,
  vitestName,
} from './docs-data'
import { headerPlugin } from './headerMdPlugin'
import { themes } from './themes'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: 'Cnblog Labs',
  description: '使用现代前端工具构建博客园皮肤',
  scrollOffset: 'header',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'cnblog, theme, 博客园, 皮肤, vite, typescript, esm, node',
      },
    ],
    ['meta', { property: 'og:title', content: vitestName }],
    ['meta', { property: 'og:description', content: vitestDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  ],
  themeConfig: {
    editLink: {
      repo: 'cnbloglabs/docs',
      text: '对此页面提供更改建议',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/cnbloglabs/' }],
    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT',
      },
      copyright: `Copyright © 2018-${new Date().getFullYear()} guangzan`,
    },
    algolia: {
      appId: 'ZTF29HGJ69',
      apiKey: '9c3ced6fed60d2670bb36ab7e8bed8bc',
      indexName: 'vitest',
    },
    nav: [
      { text: '在博客园使用', link: '/cnblog/introduce' },
      { text: '构建皮肤', link: '/dev/environment' },
      { text: '博客园', link: 'https://www.cnblogs.com/' },
    ],
    sidebar: {
      '/cnblog/': [
        {
          text: 'Hi，bloger',
          items: [
            {
              text: '🚀 介绍',
              link: '/cnblog/introduce',
            },
            {
              text: '🤔 常见问题',
              link: '/cnblog/questions',
            },
          ],
        },
        {
          text: '在博客园使用',
          items: [
            {
              text: '📦 快速安装',
              link: '/cnblog/usage-install',
            },
            {
              text: '✨ 参考配置',
              link: '/cnblog/usage-reference',
            },
            {
              text: '🍬 配置选项',
              link: '/cnblog/usage-options',
            },
            {
              text: '🤔 常见问题',
              link: '/cnblog/usage-questions',
            },
            {
              text: '🌌 备选 loading',
              link: '/cnblog/usage-loading',
            },
          ],
        },
        {
          text: '所有皮肤',
          items: themes,
        },
      ],
      '/dev/': [
        {
          text: '快速开始',
          items: [
            {
              text: '⛺ 依赖环境',
              link: '/dev/environment',
            },
            {
              text: '🚀 手动创建',
              link: '/dev/install',
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: '🚁 API 介绍',
              link: '/dev/API-introduce',
            },
          ],
        },
        {
          text: '插件',
          items: [
            {
              text: ' 🚀 插件介绍',
              link: '/dev/plugin-introduce',
            },
          ],
        },
        {
          text: '迁移',
          items: [
            {
              text: '🚀 为什么迁移',
              link: '/dev/migrate-why',
            },
          ],
        },
      ],
    },
  },
  markdown: {
    lineNumbers: false,
    config(md) {
      md.use(headerPlugin)
    },
  },
})
