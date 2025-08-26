import { useNoticeOptions } from '@acnb/options'
import { toast } from '../toast'

function shoot(contents) {
  const length = contents.length
  for (let i = 0; i < length; i++) {
    toast(contents[i], 'info')
  }
}

export function notice(theme, devOptions) {
  const { enable, contents } = useNoticeOptions(devOptions)
  if (!enable && contents.length) {
    return
  }
  shoot(contents)
}
