import { useQueryDOM } from '@acnb/hooks'
import {
  Bell,
  Edit3,
  Home,
  type LucideIcon,
  Settings,
  User,
} from 'lucide-preact'

interface NavItem {
  id: string
  text: string
  icon: LucideIcon | undefined
  onClick: () => void
}

const iconMap = {
  首页: Home,
  新随笔: Edit3,
  联系: User,
  订阅: Bell,
  管理: Settings,
}

export function useNavItems() {
  return useQueryDOM({
    selector: '#navList',
    queryFn: (el) => {
      const navItems: NavItem[] = []

      if (!el) {
        return navItems
      }

      const navLinks = el.querySelectorAll('li a.menu')

      navLinks.forEach((link) => {
        const text = link.textContent?.trim() || ''
        const id = link.id || ''
        const href = link.getAttribute('href')
        navItems.push({
          id,
          text,
          icon: iconMap[text as keyof typeof iconMap],
          onClick: () => {
            if (href) {
              window.open(href, '_blank')
              return
            }
            if (text === '订阅') {
              $('#blog_nav_rss').trigger('click')
            }
          },
        })
      })

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
