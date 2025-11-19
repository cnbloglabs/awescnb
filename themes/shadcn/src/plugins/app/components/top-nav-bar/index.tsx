// import { getIndexUrl } from 'tona-utils'
import { cn } from '@/lib/utils'
import { HeaderWrapper } from './header-wrapper'
import { NavItems } from './nav-items'

// import Signature from './signature.svg?react'

interface Props extends React.ComponentProps<typeof HeaderWrapper> {
  containerClassName?: string
}

export function TopNavBar({ containerClassName, ...props }: Props) {
  return (
    <HeaderWrapper {...props}>
      <div
        data-header-container='true'
        className={cn(
          'screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-edge border-x px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl',
          containerClassName,
        )}
      >
        {/* <a href={getIndexUrl()} className="flex items-center">
          <Signature className="h-12 w-12 text-foreground"></Signature>
        </a> */}
        <nav className='ml-auto flex items-center gap-4'>
          <NavItems />
        </nav>
      </div>
    </HeaderWrapper>
  )
}
