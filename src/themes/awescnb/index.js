import '@/assets/css/common.css'
import merge from '@/assets/utils/merge'
import { hideLoading, printing } from './build'

merge()

class AwesCnb {
    constructor() {}
    init() {
        hideLoading()
        printing()
    }
}

export default AwesCnb
