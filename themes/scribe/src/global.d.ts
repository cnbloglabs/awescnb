declare global {
  interface Window {
    GetCommentBody: (id: number) => void
    ReplyComment: (id: number, replyTo: string) => void
    QuoteComment: (id: number, replyTo: string) => void
    DelComment: (d: number, this: any, parentId: number) => void
    currentPostId: number
  }
}

export {}
