export interface Theme {
  name?: string
}

export interface IData {
  version: number
  data: Array<Theme>
}

export interface IOptions {
  base: {
    theme: string
  }
  theme: Theme
}
