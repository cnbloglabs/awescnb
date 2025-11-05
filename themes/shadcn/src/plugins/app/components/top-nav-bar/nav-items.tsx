import { useNavItems } from './hooks'

export function NavItems() {
  const { data } = useNavItems()

  return (
    <ul className='flex items-center gap-1'>
      {data?.map((item) => (
        <li
          key={item.id}
          className='relative cursor-default select-none rounded-lg px-4 py-2 text-muted-foreground text-sm/6 transition-all duration-200 hover:bg-primary/10 hover:text-foreground'
          onClick={item.onClick}
        >
          <div className='flex items-center gap-2'>
            {item.icon && <item.icon className='h-4 w-4 md:hidden' />}
            <span className='hidden md:inline'>{item.text}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
