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
        return <Home className='h-4 w-4' />
      case 'pen':
        return <Pen className='h-4 w-4' />
      case 'mail':
        return <Mail className='h-4 w-4' />
      case 'rss':
        return <Rss className='h-4 w-4' />
      case 'settings':
        return <Settings className='h-4 w-4' />
      default:
        return null
    }
  }

  return (
    <nav className='bg-background'>
      <div className='px-4 sm:px-6 lg:px-6'>
        <div className='flex h-14 items-center justify-end'>
          {/* signature.svg 图标 */}
          <div className='mr-auto flex items-center'>
            <Signature className='h-14 w-14 text-foreground'></Signature>
          </div>

          {/* 左侧 Logo、标题和导航菜单 */}
          <div className='flex items-center gap-4'>
            {/* 导航菜单 */}
            <div className='flex items-center gap-1'>
              {navData.navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className='hover:!no-underline relative rounded-lg px-4 py-2 text-muted-foreground text-sm/6 transition-all duration-200 hover:bg-primary/10 hover:text-foreground'
                >
                  <div className='flex items-center gap-2'>
                    {item.icon && getNavIcon(item.icon)}
                    <span>{item.text}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 右侧 GitHub 图标 */}
          {navData.githubUrl && (
            <div className='ml-1 flex items-center'>
              <a
                href={navData.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-foreground'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5' />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
