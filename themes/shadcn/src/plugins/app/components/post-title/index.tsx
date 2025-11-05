import { usePostTitle } from './hooks'

export function PostTitle() {
  const { data } = usePostTitle()

  return (
    <h1 className='scroll-m-20 font-semibold text-4xl tracking-tight sm:text-3xl xl:text-4xl'>
      {data}
    </h1>
  )
}
