declare global {
  interface Window {
    isBlogOwner: boolean
    isLogined: boolean
    currentBlogApp: string
    cb_blogUserGuid: string
    skinName: string
    visitorUserId: string
    currentBlogId: string
    follow: (guid: string) => void
    unfollow: (guid: string) => void
    opts: Record<string, unknown>
  }
}

export {}
