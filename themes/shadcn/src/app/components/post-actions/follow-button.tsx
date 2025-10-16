import { Heart, Loader2 } from 'lucide-preact'
import { Button } from '@/components/ui/button'
import { useFollowAction } from './dom-hooks'
import { triggerFollow } from './utils'

export function FollowButton() {
  const { data, isPending } = useFollowAction()

  return (
    <Button onClick={triggerFollow} disabled={isPending} variant='outline'>
      {isPending ? (
        <Loader2 size={18} className='animate-spin' />
      ) : (
        <Heart
          size={18}
          className={data?.isFollowed ? 'fill-red-500 text-red-500' : ''}
        />
      )}
      <span>{data?.isFollowed ? '取消关注' : '关注'}</span>
    </Button>
  )
}
