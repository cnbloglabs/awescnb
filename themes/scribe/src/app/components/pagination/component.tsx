import { cva } from 'class-variance-authority'
import { ChevronLeft, ChevronRight } from 'lucide-preact'

interface PaginationItem {
  type: 'link' | 'text' | 'current'
  text: string
  href?: string
}

interface PaginationProps {
  items: PaginationItem[]
}

const paginationItemVariants = cva(
  'no-underline! inline-flex items-center justify-center gap-1 rounded-md px-4 py-2 font-medium text-sm',
  {
    variants: {
      variant: {
        link: 'border-transparent border-none text-foreground hover:border-primary/30 hover:bg-muted',
        current:
          'size-9 shrink-0 cursor-pointer select-none whitespace-nowrap border bg-background text-foreground shadow-xs outline-none hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:border-input dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50',
        text: '',
      },
      isArrow: {
        true: 'gap-2',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'text',
      isArrow: false,
    },
  },
)

export function Pagination({ items }: PaginationProps) {
  const getItemContent = (item: PaginationItem) => {
    if (item.text === '上一页') {
      return (
        <>
          <ChevronLeft className='size-4' />
          <span>上一页</span>
        </>
      )
    }

    if (item.text === '下一页') {
      return (
        <>
          <span>下一页</span>
          <ChevronRight className='size-4' />
        </>
      )
    }

    return <span>{item.text}</span>
  }

  return (
    <nav aria-label='pagination' className='mx-auto flex w-full justify-center'>
      <ul className='mt-8 mb-4 flex items-center justify-center space-x-2'>
        {items.map((item) => (
          <li key={item.text} className=''>
            <a
              href={item.href}
              className={paginationItemVariants({
                variant: item.type,
                isArrow: item.text === '上一页' || item.text === '下一页',
              })}
            >
              {getItemContent(item)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
