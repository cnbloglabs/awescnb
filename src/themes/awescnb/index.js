import '@/assets/css/common.css'

if (!window.opts) {
    const { userOptions } = require('@/assets/utils/merge')
    window.opts = userOptions
}

const { hideLoading, printing } = require('./build')

class AwesCnb {
    constructor() {}
    init() {
        hideLoading()
        printing()
    }
}

export default AwesCnb
