import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

interface UseQueryDomOptions<T> {
  selector: string
  observe?: boolean
  queryFn: (el: Element | null) => T | null

  /**
   * 监听的 selector 的 DOM 相关的 AJAX 请求 URL
   */
  ajaxUrl?: string | string[]
}

interface UseQueryDomResult<T> {
  data: T | null
  isPending: boolean
}

export function useQueryDOM<T>({
  selector,
  observe = false,
  queryFn,
  ajaxUrl,
}: UseQueryDomOptions<T>): UseQueryDomResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [isPending, setIsPending] = useState(false)
  const queryFnRef = useRef(queryFn)
  const observerRef = useRef<MutationObserver | null>(null)
  const ajaxStartRef = useRef<number>(0)

  // 保持 queryFn 最新引用
  useEffect(() => {
    queryFnRef.current = queryFn
  }, [queryFn])

  const queryElement = useCallback(() => {
    const element = document.querySelector(selector)
    const nextData = queryFnRef.current(element)

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

  // 监听 AJAX 请求状态
  useEffect(() => {
    if (!ajaxUrl) return

    const urls = Array.isArray(ajaxUrl) ? ajaxUrl : [ajaxUrl]
    let timeoutId: number | null = null
    const pendingRequests = new Set<string>() // 跟踪正在进行的请求

    const clearPending = () => {
      setIsPending(false)
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
    }

    const checkAllRequestsComplete = () => {
      if (pendingRequests.size === 0) {
        clearPending()
      }
    }

    const handleAjaxSend = (_: any, __: any, ajaxOptions: any) => {
      const url = ajaxOptions?.url || ''
      if (urls.some((targetUrl) => url.includes(targetUrl))) {
        // console.log('ajaxSend:', url)
        pendingRequests.add(url)
        setIsPending(true)
        ajaxStartRef.current = Date.now()

        // 设置超时保护，防止一直 pending
        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = window.setTimeout(() => {
          // console.log('ajaxTimeout for:', url)
          pendingRequests.delete(url)
          checkAllRequestsComplete()
        }, 10000) // 10秒超时
      }
    }

    const handleAjaxComplete = (_: any, __: any, ajaxOptions: any) => {
      const url = ajaxOptions?.url || ''
      if (urls.some((targetUrl) => url.includes(targetUrl))) {
        // console.log('ajaxComplete:', url)
        pendingRequests.delete(url)

        // 添加小延迟确保 DOM 更新完成
        setTimeout(() => {
          checkAllRequestsComplete()
        }, 50)
      }
    }

    const handleAjaxError = (_: any, __: any, ajaxOptions: any) => {
      const url = ajaxOptions?.url || ''
      if (urls.some((targetUrl) => url.includes(targetUrl))) {
        // console.log('ajaxError:', url)
        pendingRequests.delete(url)
        checkAllRequestsComplete()
      }
    }

    // 监听 jQuery AJAX 事件
    $(document).ajaxSend(handleAjaxSend)
    $(document).ajaxComplete(handleAjaxComplete)
    $(document).ajaxError(handleAjaxError)

    return () => {
      $(document).off('ajaxSend', handleAjaxSend)
      $(document).off('ajaxComplete', handleAjaxComplete)
      $(document).off('ajaxError', handleAjaxError)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      pendingRequests.clear()
    }
  }, [ajaxUrl])

  return { data, isPending }
}
