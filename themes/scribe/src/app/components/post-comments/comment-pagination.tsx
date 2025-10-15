import { CommentPaginationComponent } from './comment-pagination-component'
import { CommentPaginationVisible } from './comment-pagination-visible'

export function CommentPagination() {
  return (
    <CommentPaginationVisible>
      <CommentPaginationComponent></CommentPaginationComponent>
    </CommentPaginationVisible>
  )
}
