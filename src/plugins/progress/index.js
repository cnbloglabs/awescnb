// 头部进度条
import 'nprogress/nprogress.css'
import NProgress from 'NProgress'
import { userAgent } from 'utils/helpers'
import { getCurrentPage } from 'utils/cnblog'
import { topProgressConfig } from 'options/plugins'

export default (theme, devOptions) => {
    const { enable, page, agent } = topProgressConfig(devOptions)

    if (!enable) return
    if (page !== getCurrentPage() && page !== 'all') return
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
