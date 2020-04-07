import toast from '@plugins/toast'

async function sleep(time) {
    return new Promise(res => setTimeout(res, time))
}

async function shoot(textList) {
    for (let i = 0; i < textList.length; i++) {
        toast(textList[i])
        if (i < textList.length - 1) await sleep(3000)
    }
}

function notice() {
    const { isAuthor, notices } = window.opts.author
    const { enable, text } = window.opts.notice
    if (!isAuthor) {
        if (!enable) return
        shoot(text)
    } else {
        enable ? shoot(notices.concat(text)) : shoot(notices)
    }
}

export default notice
