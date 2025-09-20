import { cva } from 'class-variance-authority'
import { ChevronUp } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'

const backToTopVariants = cva(
  'fixed bottom-8 right-8 z-50 rounded-full shadow-lg border-none cursor-pointer transition-all duration-300 ease-in-out',
  {
    variants: {
      visible: {
        true: 'opacity-100 pointer-events-auto translate-y-0',
        false: 'opacity-0 pointer-events-none translate-y-4',
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
      aria-label="回到顶部"
      className={backToTopVariants({ visible: isVisible })}
      type="button"
    >
      <div className="w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center">
        <ChevronUp className="w-5 h-5" />
      </div>
    </button>
  )
}
