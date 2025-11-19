import { useState } from 'preact/hooks'
import { cn } from '@/lib/utils'
import { HoverCard } from './hover-card'
import { MemoedItem } from './memoed-toc-item'
import type { TocDataItem } from './toc-item'

interface Props {
  className?: string
  toc: TocDataItem[]
  rootDepth: number
  currentScrollRange: [number, number]
  handleScrollTo: (i: number, $el: HTMLElement | null, anchorId: string) => void
}

export const LineToc = ({
  className,
  toc,
  rootDepth,
  currentScrollRange,
  handleScrollTo,
}: Props) => {
  const [hoverShow, setHoverShow] = useState(false)

  return (
    <div className='scrollbar-none flex grow flex-col scroll-smooth px-2'>
      <div
        className={cn(
          'group scrollbar-none overflow-auto opacity-60 duration-200 group-hover:opacity-100',
          className,
        )}
        onMouseEnter={() => setHoverShow(true)}
      >
        {toc.map((heading, index) => (
          <MemoedItem
            heading={heading}
            key={heading.anchorId}
            rootDepth={rootDepth}
            onClick={handleScrollTo}
            isScrollOut={index < currentScrollRange[0]}
            range={index === currentScrollRange[0] ? currentScrollRange[1] : 0}
          />
        ))}
      </div>
      <HoverCard
        show={hoverShow}
        toc={toc}
        rootDepth={rootDepth}
        currentScrollRange={currentScrollRange}
        onScrollToButtonClick={handleScrollTo}
        onMouseLeave={() => setHoverShow(false)}
      />
    </div>
  )
}
