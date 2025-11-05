import { Loader2, Star } from 'lucide-preact'
import { Button } from '@/plugins/app/components/ui/button'
import { useFavoriteAction } from './dom-hooks'
import { triggerFavorite } from './utils'

export function FavoriteButton() {
  const { data, isPending } = useFavoriteAction()

  return (
    <Button
      onClick={triggerFavorite}
      disabled={data?.isFavorite || isPending}
      variant='outline'
    >
      {isPending ? (
        <Loader2 size={18} className='animate-spin' />
      ) : (
        <Star
          size={18}
          className={data?.isFavorite ? 'fill-yellow-500 text-yellow-500' : ''}
        />
      )}
      <span>{data?.isFavorite ? '已收藏' : '收藏'}</span>
    </Button>
  )
}
