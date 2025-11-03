import { useEffect } from 'preact/hooks'

/**
 * 通用的 Ajax 完成监听 Hook
 * @param config 配置对象
 * @param config.urlPattern 要监听的 URL 模式（支持字符串包含匹配）
 * @param config.onSuccess 成功时的回调函数
 * @param config.onError 错误时的回调函数
 */
export function useAjaxComplete(config: {
  urlPattern: string | string[]
  onSuccess?: (
    response: any,
    jqXHR: JQuery.jqXHR,
    option: JQuery.AjaxSettings,
  ) => void
  onError?: (
    response: any,
    jqXHR: JQuery.jqXHR,
    option: JQuery.AjaxSettings,
  ) => void
}) {
  useEffect(() => {
    const { urlPattern, onSuccess, onError } = config

    const handleAjaxComplete = (
      _: any,
      jqXHR: JQuery.jqXHR,
      option: JQuery.AjaxSettings,
    ) => {
      const url = option?.url
      if (!url) return

      const patterns = Array.isArray(urlPattern) ? urlPattern : [urlPattern]
      const isUrlMatch = patterns.some((pattern) => url.includes(pattern))

      if (!isUrlMatch) return

      const response = jqXHR.responseJSON || jqXHR.responseText
      const hasError = jqXHR.status >= 400

      if (hasError && onError) {
        onError(response, jqXHR, option)
      } else if (!hasError && onSuccess) {
        onSuccess(response, jqXHR, option)
      }
    }

    $(document).on('ajaxComplete', handleAjaxComplete)

    return () => {
      $(document).off('ajaxComplete', handleAjaxComplete)
    }
  }, [config])
}
