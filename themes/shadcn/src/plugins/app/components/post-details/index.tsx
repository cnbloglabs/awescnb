import { memo } from 'preact/compat'
import { useEffect, useRef } from 'preact/hooks'

interface PostDetailsProps {
  onReady?: () => void
}

export const PostDetails = memo(({ onReady }: PostDetailsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const onReadyRef = useRef(onReady)

  useEffect(() => {
    onReadyRef.current = onReady
  }, [onReady])

  useEffect(() => {
    const element = document.getElementById('cnblogs_post_body') as HTMLElement
    const container = containerRef.current

    if (element && container) {
      container.appendChild(element)
      setTimeout(() => {
        onReadyRef.current?.()
      }, 0)
    }
  }, [])

  return <div ref={containerRef} className='custom-markdown'></div>
})
