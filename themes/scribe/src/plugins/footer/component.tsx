import { ThemeToggle } from './theme-toggle'

export function Component() {
  return (
    <footer className='mt-16 border-border border-t bg-card'>
      <div className='mx-auto max-w-7xl px-4 pt-6 pb-24 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div className='flex justify-center md:justify-start'>
            <ThemeToggle />
          </div>
          <div className='flex items-center justify-center gap-2 text-muted-foreground text-sm md:justify-end'>
            <span>Built by zane.</span>
            <span>Powered by 博客园.</span>
            <span>The source code is available on</span>
            <a
              href='https://github.com/cnbloglabs/awescnb'
              target='_blank'
              className='underline transition-colors hover:text-foreground'
              rel='noreferrer noopener'
            >
              GitHub
            </a>
            <span>.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
