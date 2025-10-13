import './comment-input.css'
import { RichText } from '../rich-text'
import { useCommentFormHTML } from './hooks'

export function CommentInput() {
  const { data: HTML } = useCommentFormHTML()

  if (!HTML) {
    return null
  }

  return <RichText className='custom-comment-input mt-4' html={HTML} />
}
