import { FavoriteButton } from './favorite-button'
import { FollowButton } from './follow-button'
import { UpvoteButton } from './upvote-button'

export function PostActions() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 py-6'>
      <UpvoteButton></UpvoteButton>
      <FollowButton></FollowButton>
      <FavoriteButton></FavoriteButton>
    </div>
  )
}
