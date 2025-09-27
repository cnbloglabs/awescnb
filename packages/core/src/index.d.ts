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

export type Plugin =
  | (PluginInstallFunction & { install?: PluginInstallFunction })
  | {
      install: PluginInstallFunction
    }

export interface CreateThemeConfig {
  log: boolean
}

export declare const createTheme: (options?: CreateThemeConfig) => Theme

export declare const defineOptions: <
  F extends object,
  D extends object,
  U extends object,
>(
  userOptionName: string | Array<string>,
  defaultOptions: F,
) => (devOptions?: D) => F & U & D
