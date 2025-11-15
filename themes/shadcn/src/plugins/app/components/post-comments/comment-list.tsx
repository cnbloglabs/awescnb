import { useAjaxComplete } from 'tona-hooks'
import { toast } from 'tona-sonner'
import { CommentEmpty } from './comment-empty'
import { CommentItemComponent } from './comment-item'
import { CommentSkeleton } from './comment-skeleton'
import { useComments } from './hooks'

export function CommentList() {
  useAjaxComplete({
    urlPattern: ['PostComment/Add', 'DeleteComment'],
    onSuccess: () => {
      new window.blogCommentManager().renderComments(0)
    },
  })

  useAjaxComplete({
    urlPattern: '/ajax/vote/comment',
    onSuccess: (resp: {
      data: null | string
      id: number
      isSuccess: boolean
      message: string
    }) => {
      if (resp.isSuccess) {
        toast.success('投票成功')
        new window.blogCommentManager().renderComments(0)
      } else {
        toast.error(resp.message)
      }
    },
    onError: () => {
      toast.error('投票失败')
    },
  })

  const { data: comments, isPending } = useComments()

  if (isPending) {
    return <CommentSkeleton count={comments?.length || 3} />
  }

  if (!comments || comments.length === 0) {
    return <CommentEmpty />
  }

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-foreground text-lg'>
          评论 ({comments.length})
        </h2>
      </div>
      <div className='space-y-4'>
        {comments.map((comment) => (
          <CommentItemComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}
