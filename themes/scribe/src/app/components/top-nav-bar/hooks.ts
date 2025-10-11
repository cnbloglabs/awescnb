import { useQueryDOM } from '@acnb/hooks'

export function useNavItems() {
  return useQueryDOM({
    selector: '#navList',
    queryFn: (el) => {
      const navItems: {
        id: string
        text: string
        href: string
      }[] = []

      if (el) {
        const navLinks = el.querySelectorAll('li a.menu')
        navLinks.forEach((link) => {
          const text = link.textContent?.trim() || ''
          if (text === '博客园') return
          const id = link.id || ''
          const href = link.getAttribute('href') || '#'
          navItems.push({ id, text, href })
        })
      }

      return navItems
    },
  })
}

export function useBlogTitle() {
  return useQueryDOM({
    selector: '#blogTitle h1 a',
    queryFn: (el) => el?.textContent || '',
  })
}
