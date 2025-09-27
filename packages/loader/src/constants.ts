export const DEFAULT_THEME_NAME = 'acg'
export const LEGACY_THEME = {
  acg: 'reacg',
  bilibiliv1: 'bilibili',
}
export const BASE_URL = (() => {
  const src = (document.currentScript as HTMLScriptElement).getAttribute(
    'src',
  ) as string
  return src.substring(0, src.lastIndexOf('/'))
})()
