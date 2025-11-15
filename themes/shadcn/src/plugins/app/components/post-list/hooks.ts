import { useQueryDOM } from '@tona/hooks'
import type { PostItem } from './types'

export function usePostList() {
  return useQueryDOM({
    selector: '.forFlow',
    observe: true,
    queryFn: (el) => {
      const items: PostItem[] = []
      if (!el) return items

      const dayElements = el.querySelectorAll('.day')

      dayElements.forEach((dayEl) => {
        const dayTitleEl = dayEl.querySelector('.dayTitle a')
        const postTitleEl = dayEl.querySelector('.postTitle a.postTitle2')
        const postConEl = dayEl.querySelector('.postCon .c_b_p_desc')
        const postDescEl = dayEl.querySelector('.postDesc')

        if (postTitleEl) {
          const date = dayTitleEl?.textContent?.trim() || ''
          const title = postTitleEl.textContent?.trim() || ''
          const href = postTitleEl.getAttribute('href') || '#'
          const description =
            postConEl?.textContent?.replace(/阅读全文$/, '').trim() || ''

          const postDescText = postDescEl?.textContent || ''
          const authorMatch = postDescText.match(/posted @ [^ ]+ [^ ]+ ([^ ]+)/)
          const postTimeMatch = postDescText.match(/posted @ ([^ ]+)/)
          const viewCountMatch = postDescText.match(/阅读\((\d+)\)/)
          const commentCountMatch = postDescText.match(/评论\((\d+)\)/)
          const diggCountMatch = postDescText.match(/推荐\((\d+)\)/)

          const editLinkEl = dayEl.querySelector(
            '.postDesc a[href*="EditPosts"]',
          )
          const editHref = editLinkEl?.getAttribute('href') || '#'

          items.push({
            date,
            title,
            href,
            description,
            author: authorMatch?.[1] || '',
            postTime: postTimeMatch?.[1] || '',
            viewCount: viewCountMatch?.[1] || '0',
            commentCount: commentCountMatch?.[1] || '0',
            diggCount: diggCountMatch?.[1] || '0',
            editHref,
          })
        }
      })

      return items
    },
  })
}
