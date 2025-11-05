import { usePostList } from './hooks'
import { PostListItem } from './post-list-item'

export function PostList() {
  const { data: items } = usePostList()

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className='fade-in-0 slide-in-from-top-2 mx-auto w-full max-w-2xl animate-in px-4 py-4 duration-300 lg:py-16'>
      {items.map((item) => (
        <PostListItem key={`${item.href}-${item.title}`} item={item} />
      ))}
    </div>
  )
}
