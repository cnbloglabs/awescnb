import type { IOptions } from './types'
import { BASE_URL, DEFAULT_THEME_NAME, LEGACY_THEME } from './constants'
import { isURL, loadScript } from './helpers'

function mountOptions(options: IOptions) {
  window.opts = options
}

function getUserConfig(options: IOptions) {
  if (typeof options?.base?.theme === 'string') {
    return options.base.theme
  }
  if (typeof options?.theme?.name === 'string') {
    return options.theme.name
  }
  return DEFAULT_THEME_NAME
}

function ensureThemeUrl(theme: string) {
  if (isURL(theme)) {
    return theme
  }
  const _theme = LEGACY_THEME[theme as keyof typeof LEGACY_THEME] ?? theme
  return `${BASE_URL}/${_theme}.js`
}

export async function loader(options: IOptions) {
  mountOptions(options)
  loadScript(ensureThemeUrl(getUserConfig(options)))
}
