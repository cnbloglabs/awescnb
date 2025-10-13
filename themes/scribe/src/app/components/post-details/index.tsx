import { useEffect, useRef } from 'preact/hooks'

function wrapTables(ele: HTMLElement) {
  const tables = ele.querySelectorAll('table')
  tables.forEach((table) => {
    const wrapper = document.createElement('div')
    wrapper.className = 'my-6 w-full overflow-y-auto rounded-lg border'

    if (table.parentNode) {
      table.parentNode.insertBefore(wrapper, table)
      wrapper.appendChild(table)
    }
  })

  return ele
}

export function PostDetails() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const form = document.getElementById('cnblogs_post_body') as HTMLElement

    const processedEle = wrapTables(form)
    const container = containerRef.current

    if (processedEle && container) {
      container.appendChild(processedEle)
    }
  }, [])

  return <div ref={containerRef} className='custom-markdown'></div>
}
