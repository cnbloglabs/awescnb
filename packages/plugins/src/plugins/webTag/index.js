// 设置网站图标和标题
import { useWebsiteTagOptions } from '@acnb/options'

/**
 * 构建网页标题
 * @param {*} title
 */
function setTitle(title) {
  if (title === '') {
    return
  }
  document.title = title
}

/**
 * 构建网页 favicon
 * @param {*} favicon
 */
function setFavicon(favicon) {
  if (favicon === '') {
    return
  }
  const el = document.getElementById('favicon')
  if (el === null) {
    $('title').after(
      `<link id="favicon" rel="shortcut icon" href="${favicon}" type="image/svg+xml">`,
    )
  } else {
    el.href = favicon
  }
}

export function webTag(theme, devOptions) {
  const { enable, title, favicon } = useWebsiteTagOptions(devOptions)
  if (!enable) {
    return
  }
  setTitle(title)
  setFavicon(favicon)
}
