declare global {
  interface Window {
    currentBlogApp: string
  }

  const ShowCommentMsg: (msg: string) => void
  const errorMsg: string
  const commentEditor: any
  const markdown_highlight: (selector: string) => void
  const cb_mathjax_render: (selector: string) => void
  const zoomManager: any
  const ResetCommentBox: () => void
}

export {}
