import type { PropsWithChildren } from 'preact/compat'
import { checkCommentPaginationShouldVisible } from './utils'

export function CommentPaginationVisible({ children }: PropsWithChildren) {
  if (checkCommentPaginationShouldVisible()) {
    return children
  }
  return null
}
