import './comment-input.css'
import { RichText } from '../rich-text'
import { useCommentInputHTML } from './hooks'

export function CommentInput() {
  const { data: HTML } = useCommentInputHTML()

  if (!HTML) {
    return null
  }

  return <RichText className='custom-comment-input' html={HTML} />
}
