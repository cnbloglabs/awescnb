import { Github, Home, Mail, Pen, Rss, Settings } from 'lucide-preact'
import Signature from './signature.svg?react'

interface NavItem {
  id: string
  text: string
  href: string
  icon?: string
}

interface TopNavBarData {
  blogTitle: string
  navItems: NavItem[]
  githubUrl?: string
}

interface Props {
  data: TopNavBarData
}

export function Component({ data }: Props) {
  const navData = data || { blogTitle: '', navItems: [] }

  const getNavIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-4 h-4" />
      case 'pen':
        return <Pen className="w-4 h-4" />
      case 'mail':
        return <Mail className="w-4 h-4" />
      case 'rss':
        return <Rss className="w-4 h-4" />
      case 'settings':
        return <Settings className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <nav className="bg-background sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-6">
        <div className="flex items-center h-14 justify-end">
          {/* signature.svg 图标 */}
          <div className="flex items-center mr-auto">
            <Signature className="text-foreground h-14 w-14"></Signature>
          </div>

          {/* 左侧 Logo、标题和导航菜单 */}
          <div className="flex items-center gap-4 ">
            {/* 导航菜单 */}
            <div className="flex items-center gap-1">
              {navData.navItems.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm/6 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 relative hover:!no-underline"
                >
                  <div className="flex items-center gap-2">
                    {item.icon && getNavIcon(item.icon)}
                    <span>{item.text}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 右侧 GitHub 图标 */}
          {navData.githubUrl && (
            <div className="flex items-center ml-1">
              <a
                href={navData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
