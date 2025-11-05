import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

import { useRootPortal } from './provider'

type Props = {
  to?: HTMLElement | null
} & PropsWithChildren

export const RootPortal = (props: Props) => {
  const to = useRootPortal()

  if (props.to === null) return props.children

  return createPortal(props.children, props.to || to || document.body)
}
