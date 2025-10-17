import { useAjaxComplete } from '@acnb/hooks'
import { toast } from '@acnb/sonner'
import { follow, unfollow } from '@acnb/utils'
import { Heart, Loader2 } from 'lucide-preact'
import { Button } from '@/app/components/ui/button'
import { useFollowAction } from './dom-hooks'

export function FollowButton() {
  useAjaxComplete({
    urlPattern: '/ajax/Follow/FollowBlogger',
    onSuccess: (resp: string) => {
      if (resp === '关注失败') {
        toast.error('关注失败')
      }
    },
    onError: () => {
      toast.error('关注失败')
    },
  })

  const { data, isPending } = useFollowAction()

  const handleClick = () => {
    const action = data?.isFollowed ? unfollow : follow
    action()
  }

  return (
    <Button onClick={handleClick} disabled={isPending} variant='outline'>
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
