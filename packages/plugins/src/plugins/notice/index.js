import { getNoticeOptions } from '@tona/options'
import { toast } from '../toast'

function shoot(contents) {
  const length = contents.length
  for (let i = 0; i < length; i++) {
    toast(contents[i], 'info')
  }
}

export function notice(_, devOptions) {
  const { enable, contents } = getNoticeOptions(devOptions)
  if (!enable && contents.length) {
    return
  }
  shoot(contents)
}
