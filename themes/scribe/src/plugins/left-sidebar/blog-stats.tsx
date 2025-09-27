import { TrendingUp } from 'lucide-preact'
import { useBlogStats } from './hooks'

export function BlogStatsCard() {
  const { isPending, data } = useBlogStats()

  if (isPending || !data) {
    return null
  }

  return (
    <div className='rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md'>
      <div className='p-4'>
        <div className='mb-4 flex items-center gap-2'>
          <TrendingUp className='h-4 w-4 text-primary' />
          <h3 className='font-semibold text-foreground text-sm'>博客统计</h3>
        </div>
        <div className='grid grid-cols-2 gap-2'></div>
      </div>
    </div>
  )
}
