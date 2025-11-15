import { useAjaxComplete } from '@tona/hooks'
import { toast } from '@tona/sonner'
import { likePost, unLikePost } from '@tona/utils'
import { Loader2, ThumbsUp } from 'lucide-preact'
import { Button } from '@/plugins/app/components/ui/button'
import { useVoteAction } from './dom-hooks'

export function VoteButton() {
  useAjaxComplete({
    urlPattern: '/ajax/vote/blogpost',
    onSuccess: (resp: {
      data: null | string
      id: number
      isSuccess: boolean
      message: string
    }) => {
      if (!resp.isSuccess) {
        toast.error(resp.message)
      }
    },
    onError: () => {
      toast.error('推荐失败')
    },
  })

  const { data, isPending } = useVoteAction()

  const handleClick = () => {
    const action = data?.isLiked ? unLikePost : likePost
    action()
  }

  return (
    <Button onClick={handleClick} disabled={isPending} variant='outline'>
      {isPending ? (
        <Loader2 size={18} className='animate-spin' />
      ) : (
        <ThumbsUp
          size={18}
          className={data?.isLiked ? 'fill-green-500 text-green-500' : ''}
        />
      )}
      <span>{`${data?.diggCount || 0} 推荐`}</span>
    </Button>
  )
}
