import { Eye, MessageSquare, ThumbsUp } from 'lucide-preact'
import type { PostItem } from './types'

interface PostListItemProps {
  item: PostItem
}

export function PostListItem({ item }: PostListItemProps) {
  return (
    <article
      key={`${item.href}-${item.title}`}
      className='mb-6 pb-6 last:mb-0 last:pb-0'
    >
      <div className='flex flex-col gap-2'>
        <h2>
          <a
            href={item.href}
            className='no-underline! font-semibold text-foreground text-xl transition-colors hover:text-primary'
          >
            {item.title}
          </a>
        </h2>
        <div className='flex items-center gap-4 text-muted-foreground text-sm'>
          <span>{item.postTime}</span>
          <span className='flex items-center gap-1'>
            <Eye className='h-3 w-3' />
            {item.viewCount}
            <span className='hidden sm:inline'>&nbsp;Views</span>
          </span>
          <span className='flex items-center gap-1'>
            <MessageSquare className='h-3 w-3' />
            {item.commentCount}
            <span className='hidden sm:inline'>&nbsp;Comments</span>
          </span>
          <span className='flex items-center gap-1'>
            <ThumbsUp className='h-3 w-3' />
            {item.diggCount}
            <span className='hidden sm:inline'>&nbsp;Likes</span>
          </span>
        </div>
      </div>
    </article>
  )
}
