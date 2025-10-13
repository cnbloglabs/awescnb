import { useQueryDOM } from '@acnb/hooks'
import type { CommentItem, CommentPaginationItem } from './types'

export function useComments() {
  return useQueryDOM({
    selector: '#blog-comments-placeholder',
    observe: true,
    queryFn: (el) => {
      const comments: CommentItem[] = []

      if (el) {
        const commentElements = el.querySelectorAll('.feedbackItem')

        commentElements.forEach((commentEl) => {
          const id =
            commentEl.querySelector('a[name]')?.getAttribute('name') || ''
          const authorEl = commentEl.querySelector('a[id^="a_comment_author_"]')
          const author = authorEl?.textContent?.trim() || ''
          const authorUrl = authorEl?.getAttribute('href') || ''
          const date =
            commentEl.querySelector('.comment_date')?.textContent?.trim() || ''
          const floor =
            commentEl.querySelector('.layer')?.textContent?.trim() || ''
          const contentEl = commentEl.querySelector('.blog_comment_body')
          const content = contentEl?.innerHTML || ''
          const isOwner = commentEl.querySelector('.louzhu') !== null

          const supportEl = commentEl.querySelector('.comment_digg')
          const opposeEl = commentEl.querySelector('.comment_burry')
          const supportCount =
            supportEl?.textContent?.match(/\((\d+)\)/)?.[1] || '0'
          const opposeCount =
            opposeEl?.textContent?.match(/\((\d+)\)/)?.[1] || '0'

          const feedbackCon = commentEl.querySelector('.feedbackCon')
          const avatarEl = feedbackCon?.querySelector(`#comment_${id}_avatar`)
          const avatar = avatarEl?.textContent?.trim() || ''

          const replyLink = contentEl?.querySelector('a[href^="#"]')
          let replyTo: CommentItem['replyTo']

          if (replyLink && replyLink.textContent === '@') {
            const replyId =
              replyLink.getAttribute('href')?.replace('#', '') || ''
            const replyAuthor = replyLink.nextSibling?.textContent?.trim() || ''
            if (replyId && replyAuthor) {
              replyTo = {
                id: replyId,
                author: replyAuthor,
              }
            }
          }

          if (id && author) {
            comments.push({
              id,
              author,
              authorUrl,
              avatar: avatar || undefined,
              date,
              content,
              floor,
              isOwner,
              supportCount,
              opposeCount,
              replyTo,
            })
          }
        })
      }

      return comments
    },
  })
}

export function useCommentPaginationItems() {
  return useQueryDOM({
    selector: '#comment_pager_bottom .pager',
    queryFn: (el) => {
      const items: CommentPaginationItem[] = []

      if (el) {
        const childNodes = el.childNodes

        for (let i = 0; i < childNodes.length; i++) {
          const node = childNodes[i]

          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element

            if (element.tagName === 'A') {
              const text = element.textContent?.trim() || ''
              const href = element.getAttribute('href') || '#'

              items.push({
                type: 'link',
                text,
                href,
              })
            } else if (element.tagName === 'SPAN') {
              const text = element.textContent?.trim() || ''
              const isCurrent = element.classList.contains('current')

              items.push({
                type: isCurrent ? 'current' : 'text',
                text,
              })
            }
          } else if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent?.trim() || ''

            if (text && !Number.isNaN(Number(text))) {
              items.push({
                type: 'current',
                text,
              })
            } else if (text) {
              items.push({
                type: 'text',
                text,
              })
            }
          }
        }
      }

      return items
    },
  })
}

export function useCommentInputHTML() {
  return useQueryDOM({
    selector: '#comment_form_container',
    observe: true,
    queryFn: (el) => el?.innerHTML ?? '',
  })
}
