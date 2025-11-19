import { __DEV__ } from '../constants/env'

export function useAvatar() {
  const avatar = __DEV__
    ? 'https://dummyimage.com/64x64/000/fff'
    : 'https://pic.cnblogs.com/avatar/1501373/20200819130243.png'

  return avatar
}
