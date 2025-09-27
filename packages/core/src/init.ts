import { __DEV__ } from './constants/env'
import type { CreateThemeConfig } from './createThemeApi'

function setDevOptions() {
  if (__DEV__) {
    window.opts = {}
  }
}

function hideLoading() {
  const loading = $('#loading,.loading')
  if (loading.length) {
    loading.fadeOut(300)
  }
}

export default (_?: CreateThemeConfig) => {
  setDevOptions()
  hideLoading()
}
