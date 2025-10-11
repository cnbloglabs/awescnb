import { Github } from 'lucide-preact'
import { NavItems } from './nav-items'
import Signature from './signature.svg?react'

export function TopNavBar() {
  return (
    <header className='bg-background'>
      <div className='px-2 sm:px-6 lg:px-6'>
        <div className='flex h-14 items-center justify-end'>
          <div className='mr-auto flex items-center'>
            <Signature className='h-14 w-14 text-foreground'></Signature>
          </div>
          <nav className='flex items-center gap-4'>
            <NavItems />
          </nav>
          <div className='ml-1 flex items-center'>
            <a
              href={'https://github.com/cnbloglabs/awescnb'}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-foreground'
              aria-label='GitHub'
            >
              <Github className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
