import type { SetStateAction } from 'preact/compat'
import { type Dispatch, useCallback, useRef, useState } from 'preact/hooks'
import { useUnmount } from './use-unmount'

export const useRafState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] => {
  const frame = useRef(0)
  const [state, setState] = useState(initialState)

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current)

    frame.current = requestAnimationFrame(() => {
      setState(value)
    })
  }, [])

  useUnmount(() => {
    cancelAnimationFrame(frame.current)
  })

  return [state, setRafState]
}
