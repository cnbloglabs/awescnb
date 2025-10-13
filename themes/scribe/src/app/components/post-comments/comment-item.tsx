import { cva } from 'class-variance-authority'
import { MessageSquare, ThumbsDown, ThumbsUp, User } from 'lucide-preact'
import { Markdown } from '../markdown'
import type { CommentItem } from './types'

const commentItemVariants = cva(
  'rounded-lg border bg-card p-4 transition-all duration-200',
  {
    variants: {
      isOwner: {
        true: 'border-primary/20 bg-primary/1',
        false: 'border-border',
      },
    },
    defaultVariants: {
      isOwner: false,
    },
  },
)

interface CommentItemProps {
  comment: CommentItem
}

export function CommentItemComponent({ comment }: CommentItemProps) {
  const handleReply = () => {
    // TODO 根据模板中的回复功能实现，需要调用 GetCommentBody 并传入 id
    window.GetCommentBody()
  }

  return (
    <article className={commentItemVariants({ isOwner: comment.isOwner })}>
      <div className='mb-3 flex items-start justify-between'>
        <div className='flex items-center gap-3'>
          {comment.avatar ? (
            <img
              src={comment.avatar}
              alt={comment.author}
              className='h-8 w-8 rounded-full object-cover'
            />
          ) : (
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-muted'>
              <User className='h-4 w-4 text-muted-foreground' />
            </div>
          )}
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <a
                href={comment.authorUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='font-medium text-foreground text-sm hover:text-primary hover:underline'
              >
                {comment.author}
              </a>
              {comment.isOwner && (
                <span className='rounded-full bg-primary px-2 py-0.5 font-medium text-primary-foreground text-xs'>
                  博主
                </span>
              )}
            </div>
            <div className='flex items-center gap-2 text-muted-foreground text-xs'>
              <span>{comment.date}</span>
              <span>•</span>
              <span>{comment.floor}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-4'>
        {comment.replyTo && (
          <div className='mb-2 rounded-md bg-muted/50 px-3 py-2'>
            <div className='flex items-center gap-1 text-muted-foreground text-sm'>
              <MessageSquare className='h-3 w-3' />
              <span>回复</span>
              <a
                href={`#${comment.replyTo.id}`}
                className='font-medium text-primary hover:underline'
              >
                @{comment.replyTo.author}
              </a>
            </div>
          </div>
        )}
        <div className='prose prose-sm dark:prose-invert max-w-none'>
          <Markdown html={comment.content} />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <button
            type='button'
            className='flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground text-xs transition-colors hover:bg-muted hover:text-foreground'
          >
            <ThumbsUp className='h-3 w-3' />
            <span>{comment.supportCount}</span>
          </button>
          <button
            type='button'
            className='flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground text-xs transition-colors hover:bg-muted hover:text-foreground'
          >
            <ThumbsDown className='h-3 w-3' />
            <span>{comment.opposeCount}</span>
          </button>
          <button
            type='button'
            className='rounded-md px-2 py-1 text-muted-foreground text-xs transition-colors hover:bg-muted hover:text-foreground'
            onClick={handleReply}
          >
            回复
          </button>
        </div>
      </div>
    </article>
  )
}
