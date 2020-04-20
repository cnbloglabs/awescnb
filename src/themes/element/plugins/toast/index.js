// 消息弹窗
import './index.css'
import { cacheScript } from '@tools'
import { notiflix } from '../../constants/urls'

function build() {
    window.Notiflix.Notify.Success('已生成博文目录，点击右下角图标查看')
}

export default function toast() {
    cacheScript(notiflix, build)
}
