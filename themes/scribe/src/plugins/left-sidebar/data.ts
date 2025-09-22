import type { BlogStats } from './types'

export function getBlogStatsDataFromDom(): BlogStats {
  const blogStats = document.querySelector('.blogStats')

  if (!blogStats) {
    return {
      postCount: 0,
      articleCount: 0,
      commentCount: 0,
      viewCount: 0,
    }
  }

  const postCountText = blogStats.querySelector('#stats_post_count')?.textContent || ''
  const articleCountText = blogStats.querySelector('#stats_article_count')?.textContent || ''
  const commentCountText = blogStats.querySelector('#stats-comment_count')?.textContent || ''
  const viewCountText = blogStats.querySelector('#stats-total-view-count')?.textContent || ''

  const extractNumber = (text: string) => {
    const match = text.match(/\d+/)
    return match ? Number.parseInt(match[0], 10) : 0
  }

  return {
    postCount: extractNumber(postCountText),
    articleCount: extractNumber(articleCountText),
    commentCount: extractNumber(commentCountText),
    viewCount: extractNumber(viewCountText),
  }
}
