import { getCurrentPage } from '@acnb/utils'

export function checkCommentPaginationShouldVisible() {
  const current = getCurrentPage()
  return ['post'].includes(current)
}
