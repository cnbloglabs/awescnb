// 头部进度条
// 引入即可

import NProgress from 'NProgress'
import { pageName, userAgent } from '@/assets/utils/tools'
import 'nprogress/nprogress.css'
import './index.scss'

const { enable, page, agent } = window.opts.topProgress

function setTopProgress() {
    if (!enable) return
    if (page !== pageName() && page !== 'all') return
    if (agent !== userAgent() && agent !== 'all') return

    NProgress.configure({
        easing: 'ease',
        speed: 500,
        showSpinner: false,
        background: '#000',
    })

    NProgress.start()

    setTimeout(() => {
        NProgress.done()
    }, 1000)
}

export default setTopProgress
