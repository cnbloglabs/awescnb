import { ThumbsUp, Loader2 } from 'lucide-preact'
import { useDiggAction } from './dom-hooks'
import { triggerDigg } from './utils'
import { Button } from '@acnb/ui'

export function DiggButton() {
  const { data, isPending } = useDiggAction()

  return (
    <Button
      onClick={triggerDigg}
      disabled={isPending}
      variant='outline'
    >
      {isPending ? <Loader2 size={18} className="animate-spin" /> : <ThumbsUp size={18} />}
      <span>{`推荐 ${data?.diggCount || 0}`}</span>
    </Button>
  )
}
