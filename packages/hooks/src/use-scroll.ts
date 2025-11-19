import type { RefObject } from 'preact'
import { useEffect } from 'preact/hooks'
import { off, on } from './misc/util'
import { useRafState } from './use-raf-state'

interface State {
  x: number
  y: number
}

export const useScroll = (ref: RefObject<HTMLElement>): State => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('`useScroll` expects a single ref argument.')
    }
  }

  const [state, setState] = useRafState<State>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handler = () => {
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop,
        })
      }
    }

    if (ref.current) {
      on(ref.current, 'scroll', handler, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      if (ref.current) {
        off(ref.current, 'scroll', handler)
      }
    }
  }, [ref, setState])

  return state
}
