import { getCurrentPage } from '@acnb/utils'

export function checkShouldVisible() {
  const current = getCurrentPage()
  return ['home'].includes(current)
}
