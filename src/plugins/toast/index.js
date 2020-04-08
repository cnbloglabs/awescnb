// 弹出提示
import './index.css'
import { materialize } from '@constants/urls'
import { cacheScript } from '@tools'

function build(title, duration) {
    window.Materialize.toast(title, duration)
}

function toast(title = '默认提示文字', duration = 3000) {
    cacheScript(materialize, () => {
        build(title, duration)
    })
}

export default toast
