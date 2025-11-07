import { useCallback, useState } from 'preact/hooks'
import { PostActions } from '../post-actions'
import { PostComments } from '../post-comments'
import { PostDetails } from '../post-details'
import { PostInfo } from '../post-info'
import { PostTitle } from '../post-title'
import { PostToc } from '../post-toc'

function PostContent() {
  const [isDetailsReady, setIsDetailsReady] = useState(false)

  return (
    <>
      <PostDetails
        onReady={useCallback(() => setIsDetailsReady(true), [])}
      ></PostDetails>
      {isDetailsReady && (
        <>
          <PostActions></PostActions>
          <PostComments></PostComments>
        </>
      )}
    </>
  )
}

export function Post() {
  return (
    <div className='h-full w-full'>
      <div className='flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full'>
        <div className='flex min-w-0 flex-1 flex-col'>
          <div className='mx-auto flex w-full min-w-0 max-w-3xl flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300'>
            <PostTitle></PostTitle>
            <PostInfo></PostInfo>
            <PostContent></PostContent>
            <PostToc></PostToc>
          </div>
        </div>
      </div>
    </div>
  )
}
