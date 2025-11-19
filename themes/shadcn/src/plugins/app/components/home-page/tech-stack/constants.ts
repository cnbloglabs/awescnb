type TechStack = {
  title: string
  href: string
  categories: string[]
  lightIcon: string
  darkIcon?: string
}

const BASE_URL = 'https://images.cnblogs.com/cnblogs_com/guangzan/2483055'

export const TECH_STACK: TechStack[] = [
  {
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    categories: ['Language'],
    lightIcon: `${BASE_URL}/t_251117094959_typescript.png`,
  },
  {
    title: 'Java',
    href: 'https://www.java.com/',
    categories: ['Language'],
    lightIcon: `${BASE_URL}/t_251117095154_java.png`,
  },
  {
    title: 'Node.js',
    href: 'https://nodejs.org/',
    categories: ['Runtime Environment'],
    lightIcon: `${BASE_URL}/t_251117100751_nodejs.png`,
  },
  {
    title: 'Bun',
    href: 'https://bun.sh/',
    categories: ['Runtime Environment'],
    lightIcon: `${BASE_URL}/t_251117100752_bun.png`,
  },
  {
    title: 'React',
    href: 'https://react.dev/',
    categories: ['Library', 'UI Library'],
    lightIcon: `${BASE_URL}/t_251117092923_react.png`,
  },
  {
    title: 'Next.js',
    href: 'https://nextjs.org/',
    categories: ['Framework'],
    lightIcon: `${BASE_URL}/t_251117092922_nextjs2-light.png`,
    darkIcon: `${BASE_URL}/t_251117092846_nextjs2-dark.png`,
  },
  {
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    categories: ['Framework'],
    lightIcon: `${BASE_URL}/t_251117092922_tailwindcss.png`,
  },
  {
    title: 'shadcn/ui',
    href: 'https://ui.shadcn.com/',
    categories: ['Library', 'Component Library'],
    lightIcon: `${BASE_URL}/t_251117092922_shadcn-ui-light.png`,
    darkIcon: `${BASE_URL}/o_251117092845_shadcn-ui-dark.png`,
  },
  {
    title: 'Ant Design',
    href: 'https://ant.design/',
    categories: ['Library', 'UI Library'],
    lightIcon: `${BASE_URL}/t_251117092901_antd.png`,
  },
  {
    title: 'Motion',
    href: 'https://motion.dev/',
    categories: ['Library', 'Animation'],
    lightIcon: `${BASE_URL}/t_251117092922_motion.png`,
  },
  {
    title: 'Docker',
    href: 'https://www.docker.com/',
    categories: ['Containerization'],
    lightIcon: `${BASE_URL}/t_251117092901_docker.png`,
  },
  {
    title: 'MySQL',
    href: 'https://www.mysql.com/',
    categories: ['Database'],
    lightIcon: `${BASE_URL}/t_251117092901_mysql.png`,
  },
  {
    title: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    categories: ['Database'],
    lightIcon: `${BASE_URL}/t_251117100740_elephant.png`,
  },
  {
    title: 'Redis',
    href: 'https://redis.io/',
    categories: ['Database'],
    lightIcon: `${BASE_URL}/t_251117092846_redis.png`,
  },
  {
    title: 'Figma',
    href: 'https://www.figma.com/',
    categories: ['Tools', 'Design'],
    lightIcon: `${BASE_URL}/t_251117092846_figma.png`,
  },
  {
    title: 'ChatGPT',
    href: 'https://chatgpt.com/',
    categories: ['Tools', 'AI'],
    lightIcon: `${BASE_URL}/t_251117092846_chatgpt-light.png`,
    darkIcon: `${BASE_URL}/t_251117092846_chatgpt-dark.png`,
  },
  {
    title: 'Cursor',
    href: 'https://cursor.com/',
    categories: ['Tools', 'AI'],
    lightIcon: `${BASE_URL}/t_251117100751_CUBE_2D_LIGHT.png`,
    darkIcon: `${BASE_URL}/t_251117100752_CUBE_2D_DARK.png`,
  },
]
