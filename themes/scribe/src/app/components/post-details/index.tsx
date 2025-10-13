import { useEffect, useRef } from 'preact/hooks'

export function PostDetails() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = document.getElementById('cnblogs_post_body') as HTMLElement
    const container = containerRef.current

    if (element && container) {
      container.appendChild(element)
    }
  }, [])

  return <div ref={containerRef} className='custom-markdown'></div>
}
