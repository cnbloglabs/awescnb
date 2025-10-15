import { toast } from 'sonner'
import { CommentEmpty } from './comment-empty'
import { CommentItemComponent } from './comment-item'
import { CommentLoading } from './comment-loading'
import { useComments } from './hooks'

$(document).ajaxComplete((_, __, option) => {
  if (
    option?.url?.includes('PostComment/Add') ||
    option?.url?.includes('DeleteComment')
  ) {
    new window.blogCommentManager().renderComments(0)
  }
})

$(document).ajaxComplete((_, jqXHR, option) => {
  if (
    option?.url?.includes('/ajax/vote/comment')
  ) {
    const resp = jqXHR.responseJSON as {
      data: null | string
      id: number
      isSuccess: boolean
      message: string
    }
    resp.isSuccess ? toast.success('投票成功') : toast.error('不能给自己投票');
  }
})


export function CommentList() {
  const { data: comments, isPending } = useComments()

  if (isPending) {
    return <CommentLoading />
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
