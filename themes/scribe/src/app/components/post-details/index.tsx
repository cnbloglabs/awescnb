import { Markdown } from '../markdown'
import { usePostDetailsRichText } from './hooks'

export function PostDetails() {
  const { data } = usePostDetailsRichText()

  if (!data) {
    return null
  }
  return (
    <div className='h-full w-full'>
      <div className='flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full'>
        <div className='flex min-w-0 flex-1 flex-col'>
          <div className='mx-auto flex w-full min-w-0 max-w-2xl flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300'>
            <Markdown html={data}></Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}
