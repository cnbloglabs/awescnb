import { Bell, Edit3, Home, Settings, User } from 'lucide-preact'
import { useNavItems } from './hooks'

const iconMap = {
  首页: Home,
  新随笔: Edit3,
  联系: User,
  订阅: Bell,
  管理: Settings,
}

export function NavItems() {
  const { data: navItems } = useNavItems()

  return (
    <div className='flex items-center gap-1'>
      {navItems?.map((item) => {
        const IconComponent = iconMap[item.text as keyof typeof iconMap]

        return (
          <a
            key={item.id}
            href={item.href}
            className='hover:!no-underline relative rounded-lg px-4 py-2 text-muted-foreground text-sm/6 transition-all duration-200 hover:bg-primary/10 hover:text-foreground'
          >
            <div className='flex items-center gap-2'>
              {IconComponent && <IconComponent className='h-4 w-4 md:hidden' />}
              <span className='hidden md:inline'>{item.text}</span>
            </div>
          </a>
        )
      })}
    </div>
  )
}
