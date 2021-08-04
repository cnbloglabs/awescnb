// 消息弹窗
import './index.css'
import { loadScript } from 'utils/helpers'
import { isPostDetailsPage } from 'utils/cnblog'
import { notiflix } from '../../urls'

function postPageNotice() {
    if (!isPostDetailsPage()) return
    window.Notiflix.Notify.Success('已生成博文目录，点击右下角图标查看')
}

function build() {
    postPageNotice()
}

export default function toast() {
    loadScript(notiflix, build)
}
