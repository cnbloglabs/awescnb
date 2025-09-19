export { }

declare global {
  interface Window {
    opts: any
    acnb: () => void
    theme: any
    currentBlogApp: string
  }
}
