import { ArrowUpCircle } from 'lucide-preact'
import { memo } from 'preact/compat'
import { cn } from '@/plugins/app/lib/utils'
import { CircleProgress } from '../ui/icons/progress'
import { useReadPercent } from './hooks/use-read-percent'

export const BackTopIndicator = memo(() => {
  const [readPercent] = useReadPercent()

  return (
    <span
      className={cn(
        'mt-2 flex grow flex-col px-2 font-sans text-gray-800 text-sm dark:text-neutral-300',
        '@[700px]:-translate-x-4 @[800px]:-translate-x-8 @[900px]:translate-x-0 @[900px]:items-start',
      )}
    >
      <div className='flex items-center gap-2 tabular-nums'>
        <CircleProgress percent={readPercent!} size={14} strokeWidth={2} />
        <span>{readPercent}%</span>
        <br />
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className={cn(
          'mt-1 flex flex-nowrap items-center gap-2 opacity-50 transition-all duration-500 hover:opacity-100',
          readPercent! > 10 ? '' : 'pointer-events-none opacity-0',
        )}
        type='button'
      >
        <ArrowUpCircle className='h-4 w-4' />
        <span className='whitespace-nowrap'>返回顶部</span>
      </button>
    </span>
  )
})
