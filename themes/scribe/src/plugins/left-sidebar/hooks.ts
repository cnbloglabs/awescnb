import { useState } from 'preact/hooks'
import { getBlogStatsDataFromDom } from './data'

export function useBlogStats() {
  const [data] = useState(() => getBlogStatsDataFromDom())
  return { data }
}
