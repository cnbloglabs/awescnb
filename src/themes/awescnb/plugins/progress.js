import NProgress from 'NProgress'
import env from '@/constants/env'
import { pageName, userAgent } from '@/assets/js/tools'
import '../../../../node_modules/nprogress/nprogress.css'

const options = window.userOptions.topProgress

// 顶部进度条 x
const setTopProgress = () => {
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
    } else if ($('#loading').length === 1) {
        let loadingState = {
            display: $('#loading').css('display'),
        }

        const handler = {
            set(target, key, value) {
                console.log(target[key])
                NProgress.done()
            },
        }

        const proxy = new Proxy(loadingState, handler)

        if ($('#loading').length !== 1) return
        $('#loading').fadeOut(300)
        proxy.display = 'block'
    }
}

export default setTopProgress
