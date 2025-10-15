import { Pagination } from '../pagination'
import { PostList } from '../post-list'

export function Home() {
  return (
    <div className='flex flex-col'>
      <PostList></PostList>
      <Pagination></Pagination>
    </div>
  )
}
