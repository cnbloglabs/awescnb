import { ThemeToggle } from '../theme-toggle'

export function Footer() {
  return (
    <footer className='mt-8 border-border border-t bg-card'>
      <div className='mx-auto max-w-7xl px-4 pt-6 pb-20 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div className='flex justify-center md:justify-start'>
            <ThemeToggle />
          </div>
          <div className='w-full text-center text-muted-foreground text-sm leading-loose sm:text-sm'>
            Built by{' '}
            <a
              href='https://github.com/guangzan'
              target='_blank'
              className='underline transition-colors hover:text-foreground'
              rel='noreferrer noopener'
            >
              zane
            </a>
            . Powered by{' '}
            <a
              href='https://www.cnblogs.com'
              target='_blank'
              className='underline transition-colors hover:text-foreground'
              rel='noreferrer noopener'
            >
              博客园
            </a>
            . The source code is available on{' '}
            <a
              href='https://github.com/cnbloglabs/awescnb'
              target='_blank'
              className='underline transition-colors hover:text-foreground'
              rel='noreferrer noopener'
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}
