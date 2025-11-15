import { getIndexUrl } from '@tona/utils'
import { NavItems } from './nav-items'
import Signature from './signature.svg?react'

export function TopNavBar() {
  return (
    <header className='bg-background'>
      <div className='px-2 sm:px-6 lg:px-6'>
        <div className='flex h-14 items-center justify-end'>
          <a href={getIndexUrl()} className='mr-auto flex items-center'>
            <Signature className='h-14 w-14 text-foreground'></Signature>
          </a>
          <nav className='flex items-center gap-4'>
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  )
}
