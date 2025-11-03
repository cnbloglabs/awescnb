import { createContext, useContext } from 'preact/compat'

export const useRootPortal = () => {
  const ctx = useContext(RootPortalContext)

  return ctx || document.body
}

export const RootPortalContext = createContext<HTMLElement | undefined>(
  undefined,
)
