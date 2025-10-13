import { post } from './request'
import { getAjaxBaseUrl } from './utils'

export function postNewComment(data: {
  postId: string
  body: string
  parentCommentId: number
}) {
  return post(`${getAjaxBaseUrl()}/PostComment/Add.aspx`, data)
}

export function updateComment() {}
