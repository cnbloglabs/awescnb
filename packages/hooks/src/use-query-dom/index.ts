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

export function useQueryDOM<T>({
  selector,
  observe = false,
  queryFn,
}: UseQueryDomOptions<T>): UseQueryDomResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [isPending, setIsPending] = useState(true)
  const queryFnRef = useRef(queryFn)
  const observerRef = useRef<MutationObserver | null>(null)

  // 保持 queryFn 最新引用
  useEffect(() => {
    queryFnRef.current = queryFn
  }, [queryFn])

  const queryElement = useCallback(() => {
    const element = document.querySelector(selector)
    const nextData = queryFnRef.current(element)
    const pending = !element

    setIsPending(pending)
    setData((prev) => {
      // 避免相同数据触发无意义渲染
      if (Object.is(prev, nextData)) return prev
      return nextData
    })
  }, [selector])

  useEffect(() => {
    queryElement()

    if (!observe) return

    const element = document.querySelector(selector)
    const targetNode = element?.parentElement || document.body

    const observer = new MutationObserver(queryElement)
    observerRef.current = observer

    observer.observe(targetNode, {
      childList: true,
      subtree: true,
      characterData: false,
    })

    return () => {
      observer.disconnect()
      observerRef.current = null
    }
  }, [observe, queryElement, selector])

  return { data, isPending }
}
