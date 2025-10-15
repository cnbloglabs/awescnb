declare global {
  interface Window {
    GetCommentBody: (commentId: number) => void
    ReplyComment: (commentId: number, replyTo: string) => void
    QuoteComment: (commentId: number, replyTo: string) => void
    DelComment: (commentId: number, this: any, parentId: number) => void
    voteComment(
      commentId: number,
      voteType: 'Digg' | 'Bury',
      parentElement: any,
      isAbandoned: boolean,
    )
    currentPostId: number
    blogCommentManager: new () => {
      renderComments: (postId: number) => void
    }
  }
}

export {}
