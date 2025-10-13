import { Markdown } from '../markdown'
import { usePostDetailsRichText } from './hooks'

export function PostDetails() {
  const { data } = usePostDetailsRichText()

  if (!data) {
    return null
  }
  return <Markdown html={data}></Markdown>
}
