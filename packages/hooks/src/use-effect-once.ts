import { type EffectCallback, useEffect } from 'preact/hooks'

export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [])
}
