// 顶部进度条
// 除了好看没啥意义
// 因为整个js加载了才会执行start
// 那么 DOM 早就加载完了
// 与cnblog机制有关

import NProgress from 'NProgress'
import env from '@/constants/env'
import { pageName, userAgent } from '@/assets/js/tools'
import 'nprogress/nprogress.css'

const opts = window.opts

const setTopProgress = () => {
    const options = opts.topProgress
    if (!options.enable) return
    if (options.page !== pageName() && options.page !== 'all') return
    if (options.agent !== userAgent() && options.agent !== 'all') return

    NProgress.configure({
        easing: 'ease',
        speed: 500,
        showSpinner: false,
        background: '#000',
    })

    NProgress.start()

    if (env === 'dev') {
        setTimeout(() => {
            NProgress.done()
        }, 1000)
    }
}

export default setTopProgress
