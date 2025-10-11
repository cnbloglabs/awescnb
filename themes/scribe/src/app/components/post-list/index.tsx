import { usePostList } from './hooks'
import { PostListItem } from './post-list-item'

export function PostList() {
  const { data: items } = usePostList()

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className='mx-auto w-full max-w-2xl px-4 py-4 lg:py-16'>
      {items.map((item) => (
        <PostListItem key={`${item.href}-${item.title}`} item={item} />
      ))}
    </div>
  )
}
