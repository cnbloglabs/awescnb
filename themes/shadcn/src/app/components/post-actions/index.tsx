import { FavoriteButton } from './favorite-button'
import { FollowButton } from './follow-button'
import { VoteButton } from './vote-button'

export function PostActions() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 py-6'>
      <VoteButton></VoteButton>
      <FollowButton></FollowButton>
      <FavoriteButton></FavoriteButton>
    </div>
  )
}
