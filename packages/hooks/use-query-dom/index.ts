import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

interface UseQueryDomOptions<T> {
  selector: string
  observe?: boolean
  root?: Element | Document
  queryFn: (el: Element | null) => T | null
}

interface UseQueryDomResult<T> {
  data: T | null
  isPending: boolean
  error: Error | null
  refresh: () => void
}

export function useQueryDom<T>(options: UseQueryDomOptions<T>): UseQueryDomResult<T> {
  const { selector, observe = false, root = document, queryFn } = options

  const [data, setData] = useState<T | null>(null)
  const [isPending, setIsPending] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const mountedRef = useRef(true)

  const getData = useCallback(() => {
    if (typeof document === 'undefined')
      return

    try {
      const element = root?.querySelector?.(selector) ?? null
      const newData = queryFn(element)
      const newIsPending = element === null

      if (mountedRef.current) {
        setData(newData)
        setIsPending(newIsPending)
        setError(null)
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err : new Error(String(err)))
      }
    }
  }, [root, selector, queryFn])

  useEffect(() => {
    mountedRef.current = true
    getData()

    if (observe && root) {
      const observer = new MutationObserver(() => {
        getData()
      })

      observer.observe(root, {
        childList: true,
        subtree: true,
        characterData: true,
      })

      return () => {
        observer.disconnect()
        mountedRef.current = false
      }
    }

    return () => {
      mountedRef.current = false
    }
  }, [getData, observe, root])

  return { data, isPending, error, refresh: getData }
}
