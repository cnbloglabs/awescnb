import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

interface UseQueryDomOptions<T> {
  selector: string
  observe?: boolean
  queryFn: (el: Element | null) => T | null
}

interface UseQueryDomResult<T> {
  data: T | null
  isPending: boolean
}

export function useQueryDOM<T>(
  options: UseQueryDomOptions<T>,
): UseQueryDomResult<T> {
  const { selector, observe = false, queryFn } = options
  const [data, setData] = useState<T | null>(null)
  const [isPending, setIsPending] = useState<boolean>(true)
  const queryFnRef = useRef(queryFn)

  // 更新 ref 值当 queryFn 改变时
  useEffect(() => {
    queryFnRef.current = queryFn
  }, [queryFn])

  const getData = useCallback(() => {
    const element = document.querySelector(selector)
    const newData = queryFnRef.current(element)
    const newIsPending = element === null
    setData(newData)
    setIsPending(newIsPending)
  }, [selector])

  useEffect(() => {
    getData()
    if (observe) {
      const observer = new MutationObserver(() => {
        getData()
      })
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      })
      return () => observer.disconnect()
    }
  }, [getData, observe])

  return { data, isPending }
}
