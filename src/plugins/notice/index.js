import toast from 'plugins/toast'
// import { sleep } from 'utils/helpers'
import { noticeConfig } from 'options/plugins'

/**
 * 发送通知
 * @param {Array} textList
 */
function shoot(textList) {
    textList.forEach(item => {
        toast(item, 'info')
    })
}
// async function shoot(textList) {
//     const length = textList.length
//     for (let i = 0; i < length; i++) {
//         toast(textList[i], 'info')
//         if (i < length - 1) await sleep(3800)
//     }
// }

export default (theme, devOptions) => {
    const { enable, text } = noticeConfig(devOptions)
    if (!enable && text.length) return
    shoot(text)
}
