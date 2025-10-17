import { useAjaxComplete } from '@acnb/hooks'
import { toast } from '@acnb/sonner'
import { Loader2, ThumbsUp } from 'lucide-preact'
import { Button } from '@/app/components/ui/button'
import { useDiggAction } from './dom-hooks'
import { triggerDigg } from './utils'

export function UpvoteButton() {
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

  const { data, isPending } = useDiggAction()

  return (
    <Button onClick={triggerDigg} disabled={isPending} variant='outline'>
      {isPending ? (
        <Loader2 size={18} className='animate-spin' />
      ) : (
        <ThumbsUp size={18} />
      )}
      <span>{`${data?.diggCount || 0} 推荐`}</span>
    </Button>
  )
}
