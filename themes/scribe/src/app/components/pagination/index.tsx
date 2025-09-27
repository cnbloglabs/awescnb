import { Pagination } from './component'
import { usePaginationItems } from './hooks'

export function PaginationComponent() {
  const { data: items } = usePaginationItems()

  if (!items || items.length === 0) {
    return null
  }

  return <Pagination items={items} />
}
