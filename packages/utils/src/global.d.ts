declare global {
  interface Window {
    currentBlogId: string
    currentBlogApp: string
    isLogined: boolean
    isBlogOwner: boolean
    skinName: string
    visitorUserId: string
    hasCustomScript: boolean
    cb_enable_mathjax: boolean
    mathEngine: number
    codeHighlightEngine: number
    enableCodeLineNumber: boolean
    codeHighlightTheme: string
    darkModeCodeHighlightTheme: string
    isDarkCodeHighlightTheme: boolean
    isDarkModeCodeHighlightThemeDark: boolean
    isDisableCodeHighlighter: boolean
    enableCodeThemeTypeFollowSystem: boolean
    enableMacStyleCodeBlock: boolean

    currentPostId?: number
    currentPostDateAdded?: string

    cb_blogUserGuid: string

    follow: (guid: string) => void
    unfollow: (guid: string) => void
    opts: Record<string, unknown>
    highlighter: {
      setTheme: (theme: string) => void
    }
    darkModeCodeHighlightTheme: string
    codeHighlightTheme: string
  }
}

export {}
