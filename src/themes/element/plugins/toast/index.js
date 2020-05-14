// 消息弹窗
import './index.css'
import { cacheScript, pageName } from '@tools'
import { notiflix } from '../../constants/urls'

function postPageNotice() {
    if (pageName() !== 'post') return
    window.Notiflix.Notify.Success('已生成博文目录，点击右下角图标查看')
}

function build() {
    postPageNotice()
}

export default function toast() {
    cacheScript(notiflix, build)
}
