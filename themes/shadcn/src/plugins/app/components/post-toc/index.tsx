import { memo, useMemo } from 'preact/compat'
import { cn } from '@/lib/utils'
import { BackTopIndicator } from './back-top-indicator'
import { useScrollTracking } from './hooks/use-scroll-tracking'
import { useTocItems } from './hooks/use-toc-items'
import { LineToc } from './line-toc'

function LineTocWrapper() {
  const markdownElement = useMemo(
    () => document.getElementById('cnblogs_post_body') as HTMLElement,
    [],
  )
  const { toc, rootDepth } = useTocItems(markdownElement)
  const { currentScrollRange, handleScrollTo } = useScrollTracking(toc)

  if (toc.length === 0) {
    return null
  }

  return (
    <LineToc
      className={cn(
        'fade-in-0 slide-in-from-bottom-12 easing-spring spring-soft flex animate-in flex-col items-end',
        'scrollbar-none max-h-[calc(100vh-100px)] overflow-auto',
        '@[700px]:-translate-x-12 @[800px]:-translate-x-4 @[900px]:translate-x-0 @[900px]:items-start',
      )}
      toc={toc}
      rootDepth={rootDepth}
      currentScrollRange={currentScrollRange}
      handleScrollTo={handleScrollTo}
    />
  )
}

export const PostToc = memo(() => {
  return (
    <div
      className={'fixed top-24 right-0 z-1000 hidden h-full w-[100px] md:block'}
    >
      <LineTocWrapper />
      <BackTopIndicator />
    </div>
  )
})
