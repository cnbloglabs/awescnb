import { DiggButton } from './digg-button'
import { FavoriteButton } from './favorite-button'
import { FollowButton } from './follow-button'

export function PostActions() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 py-6'>
      <DiggButton></DiggButton>
      <FollowButton></FollowButton>
      <FavoriteButton></FavoriteButton>
    </div>
  )
}
