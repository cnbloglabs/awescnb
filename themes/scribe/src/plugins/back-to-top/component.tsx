import { cva } from 'class-variance-authority'
import { ChevronUp } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'

const backToTopVariants = cva(
  'fixed right-8 bottom-8 z-50 cursor-pointer rounded-full border-none bg-transparent p-3 transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground',
  {
    variants: {
      visible: {
        true: 'pointer-events-auto translate-y-0 opacity-100',
        false: 'pointer-events-none translate-y-4 opacity-0',
      },
    },
    defaultVariants: {
      visible: false,
    },
  },
)

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.pageYOffset > 300
      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label='回到顶部'
      className={`${backToTopVariants({ visible: isVisible })}`}
      type='button'
    >
      <ChevronUp className='h-5 w-5' />
    </button>
  )
}
