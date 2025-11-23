type Tool = {
  title: string
  href: string
  categories: string[]
  lightIcon: string
  darkIcon?: string
}

const BASE_URL = 'https://blog-static.cnblogs.com/files/guangzan/'

export const TOOLS: Tool[] = [
  {
    title: 'Git',
    href: 'https://git-scm.com/',
    categories: ['Tools'],
    lightIcon: `${BASE_URL}git.svg`,
  },
  {
    title: 'Biome',
    href: 'https://biomejs.dev/',
    categories: ['Tools'],
    lightIcon: `${BASE_URL}biomejs.svg`,
  },
  {
    title: 'Cursor',
    href: 'https://cursor.sh/',
    categories: ['Editor'],
    lightIcon: `${BASE_URL}cursor-light.svg`,
    darkIcon: `${BASE_URL}cursor-dark.svg`,
  },
  {
    title: 'Zed',
    href: 'https://zed.dev/',
    categories: ['Editor'],
    lightIcon: `${BASE_URL}zed-light.svg`,
    darkIcon: `${BASE_URL}zed-dark.svg`,
  },
  {
    title: 'Obsidian',
    href: 'https://obsidian.md/',
    categories: ['Editor'],
    lightIcon: `${BASE_URL}obsidian.svg`,
  },
  {
    title: 'Ghostty',
    href: 'https://ghostty.org/',
    categories: ['Editor'],
    lightIcon: `${BASE_URL}ghostty.svg`,
  },
  {
    title: 'Arc Browser',
    href: 'https://arc.net/',
    categories: ['Browser'],
    lightIcon: `${BASE_URL}arc-browser.svg`,
  },
  {
    title: 'Figma',
    href: 'https://www.figma.com/',
    categories: ['Design'],
    lightIcon: `${BASE_URL}figma.svg`,
  },
  {
    title: 'ChatGPT',
    href: 'https://chatgpt.com/',
    categories: ['AI'],
    lightIcon: `${BASE_URL}chatgpt-light.svg`,
    darkIcon: `${BASE_URL}chatgpt-dark.svg`,
  },
]
