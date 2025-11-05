import { PostList } from '../post-list'
import { PostPagination } from '../post-pagination'
// import { Profile } from '../profile'

export function Home() {
  return (
    <div className='flex flex-col'>
      {/* <Profile></Profile> */}
      <PostList></PostList>
      <PostPagination></PostPagination>
    </div>
  )
}
