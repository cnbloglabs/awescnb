import { FlipSentences } from '@/plugins/app/components/flip-sentences'
import { useAvatar } from '@/plugins/app/hooks/use-avatar'
import { FollowButton } from './follow-button'

const flipSentences = [
  'Frontend Engineer',
  'Open Source Contributor',
  '代码构建世界，细节决定体验',
  '热爱创造的用户体验工程师',
]

export function VerifiedIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z'
      />
    </svg>
  )
}

export function ProfileHeader() {
  const avatar = useAvatar()

  return (
    <div className='screen-line-after relative flex border-edge border-x'>
      <div className='shrink-0 border-edge border-r'>
        <div className='mx-0.5 my-[3px]'>
          <img
            className='!size-32 select-none rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40'
            alt="Zane's avatar"
            src={avatar}
            fetchPriority='high'
          />
        </div>
      </div>
      <div className='flex flex-1 flex-col'>
        <div className='flex grow items-end pb-1 pl-4'>
          <div className='line-clamp-1 select-none font-mono text-xs text-zinc-300 max-sm:hidden dark:text-zinc-800'>
            {'text-3xl '}
            <span className='inline dark:hidden'>text-zinc-950</span>
            <span className='hidden dark:inline'>text-zinc-50</span>
            {' font-medium'}
          </div>
        </div>

        <div className='border-edge border-t'>
          <h1 className='flex items-center pl-4 font-semibold text-3xl'>
            Zane &nbsp;
            <VerifiedIcon className='size-[0.6em] translate-y-px select-none text-info' />
          </h1>
          <div className='h-12 border-edge border-t py-1 pl-4 sm:h-auto'>
            <FlipSentences className='text-balance font-mono text-muted-foreground text-sm'>
              {flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
      <FollowButton></FollowButton>
    </div>
  )
}
