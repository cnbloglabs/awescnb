// import env from '@/constants/env'
import NProgress from 'NProgress'
import { pageName, userAgent } from '@/assets/utils/tools'
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

    // if (env === 'dev') {
    setTimeout(() => {
        NProgress.done()
    }, 1000)
    // }
}

export default setTopProgress
