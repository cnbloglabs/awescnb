import { Home } from 'lucide-preact'
import { Pagination } from '../pagination'
import { Post } from '../post'

export function Main() {
  return (
    <main className='flex flex-col px-2'>
      <Post></Post>
      <Home></Home>
      <Pagination></Pagination>
    </main>
  )
}
