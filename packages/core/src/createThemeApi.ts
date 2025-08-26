import { __DEV__ } from './constants/env'
import init from './init'
import { isFunction } from './utils/shared'

export interface Theme {
  version: string
  _context: ThemeContext
  config: ThemeConfig
  use: (plugin: Plugin, ...options: any[]) => this
}

export interface ThemeConfig {
  globalProperties: Record<string, any>
}

export interface ThemeContext {
  theme: Theme
  config: ThemeConfig
}

export type PluginInstallFunction = (theme: Theme, ...options: any[]) => any

export type Plugin
  = | (PluginInstallFunction & { install?: PluginInstallFunction })
    | {
      install: PluginInstallFunction
    }

export interface CreateThemeConfig {
  log: boolean
}

function createThemeContext(): ThemeContext {
  return {
    theme: null as any,
    config: {
      globalProperties: {},
    },
  }
}

function createThemeAPI() {
  return function createTheme() {
    const context = createThemeContext()
    const installedPlugins = new Set()

    const theme: Theme = (context.theme = {
      _context: context,
      version: '3.0',

      get config() {
        return context.config
      },

      set config(v) {
        if (__DEV__) {
          console.warn(
            `theme.config cannot be replaced. Modify individual options instead.`,
          )
        }
      },

      use(plugin: Plugin, ...options: Array<any>) {
        if (installedPlugins.has(plugin)) {
          __DEV__
          && console.warn(`Plugin has already been applied to target theme.`)
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin)
          plugin.install(theme, ...options)
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin)
          plugin(theme, ...options)
        } else if (__DEV__) {
          console.warn(
            `A plugin must either be a function or an object with an "install" `
            + `function.`,
          )
        }
        return theme
      },
    })

    return theme
  }
}

function baseCreateTheme(options) {
  init(options)
  return {
    createTheme: createThemeAPI(),
  }
}

export function createTheme(options?: CreateThemeConfig) {
  const theme = baseCreateTheme(options).createTheme()
  return theme
}
