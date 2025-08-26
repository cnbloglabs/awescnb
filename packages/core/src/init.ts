import { __DEV__ } from './constants/env'

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

export default () => {
  setDevOptions()
  hideLoading()
}
