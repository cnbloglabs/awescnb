import { useQueryDOM } from '@acnb/hooks'

export function usePostDetailsRichText() {
  return useQueryDOM({
    selector: '#cnblogs_post_body',
    queryFn: (el) => el?.innerHTML ?? '',
  })
}
