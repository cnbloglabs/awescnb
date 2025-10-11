import { Pagination } from '../pagination'
import { PostDetails } from '../post-details'
import { PostList } from '../post-list'

export function Main() {
  return (
    <main className='flex flex-col px-2'>
      <PostDetails></PostDetails>
      <PostList></PostList>
      <Pagination></Pagination>
    </main>
  )
}
