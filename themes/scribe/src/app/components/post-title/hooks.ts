import { useQueryDOM } from '@acnb/hooks'

export function usePostTitle() {
  return useQueryDOM({
    selector: '#cb_post_title_url',
    queryFn: (el) => {
      return el?.querySelector('[role="heading"]')?.innerHTML ?? ''
    },
  })
}
