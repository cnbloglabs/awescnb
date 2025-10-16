import { Loader2, ThumbsUp } from 'lucide-preact'
import { Button } from '@/components/ui/button'
import { useDiggAction } from './dom-hooks'
import { triggerDigg } from './utils'

export function DiggButton() {
  const { data, isPending } = useDiggAction()

  return (
    <Button onClick={triggerDigg} disabled={isPending} variant='outline'>
      {isPending ? (
        <Loader2 size={18} className='animate-spin' />
      ) : (
        <ThumbsUp size={18} />
      )}
      <span>{`推荐 ${data?.diggCount || 0}`}</span>
    </Button>
  )
}
