import toast from '@plugins/toast'
import { sleep } from '@tools'

async function shoot(textList) {
    for (let i = 0; i < textList.length; i++) {
        toast(textList[i], 'info')
        if (i < textList.length - 1) await sleep(3800)
    }
}

function notice() {
    const { enable, text } = window.opts.notice
    if (!enable) return
    shoot(text)
}

export default notice
