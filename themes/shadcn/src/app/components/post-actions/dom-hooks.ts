import { useQueryDOM } from '@acnb/hooks'

export function useFollowAction() {
  return useQueryDOM({
    selector: '#author_profile_follow',
    ajaxUrl: '/ajax/Follow/FollowBlogger',
    observe: true,
    queryFn: (el) => {
      const tipsText = el?.querySelector('#author_profile_follow')?.textContent
      const isFollowed =
        tipsText?.includes('我在关注他') || tipsText?.includes('关注成功')

      return {
        isFollowed,
      }
    },
  })
}

export function useDiggAction() {
  return useQueryDOM({
    selector: '#div_digg',
    ajaxUrl: '/ajax/vote/blogpost',
    observe: true,
    queryFn: (el) => {
      const element = el as HTMLDivElement
      const diggCountElement = element.querySelector(
        '#digg_count',
      ) as HTMLSpanElement
      const diggCount = parseInt(diggCountElement.textContent || '0', 10)
      const tipsElement = element.querySelector('#digg_tips')
      const tipsText = tipsElement?.textContent
      const isDigged =
        tipsText?.includes('您已推荐过') || tipsText?.includes('支持成功')

      return {
        diggCount,
        isDigged,
      }
    },
  })
}

export function useFavoriteAction() {
  return useQueryDOM({
    selector: '#green_channel_favorite',
    // observe: true,
    queryFn: () => {
      // const isFavorite = el?.querySelector('#favorite_tips')?.textContent?.includes('您已收藏过')
      return {
        isFavorite: false,
      }
    },
  })
}
