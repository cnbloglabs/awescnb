// 头部进度条
import 'nprogress/nprogress.css'
import NProgress from 'NProgress'
import { pageName, userAgent } from '@/assets/utils/tools'
import { topProgressConfig } from '@config/plugins'

export default devOptions => {
    const { enable, page, agent } = topProgressConfig(
        devOptions,
    )
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
