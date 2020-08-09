import toast from '@plugins/toast'
import { sleep } from '@tools'

async function shoot(textList) {
    const length = textList.length
    for (let i = 0; i < length; i++) {
        toast(textList[i], 'info')
        if (i < length - 1) await sleep(3800)
    }
}

function notice() {
    const { enable, text } = window.opts.notice
    if (!enable && text.length) return
    shoot(text)
}

export default notice
