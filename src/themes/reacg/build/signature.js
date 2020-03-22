import { pageName } from '@/assets/utils/tools'
const opts = window.opts.postSignature

// 设置随笔签名
function signature() {
    if (!opts.enable) return
    if (pageName() !== 'post') return

    const author = $('#profile_block a:first')
        .text()
        .trim()
    const href =
        location.href.indexOf('#') === -1
            ? location.href
            : location.href.substring(0, location.href.lastIndexOf('#'))
    const content = opts.content
    let custom = ''
    for (let i = 0; i < content.length; i++) {
        custom += '<p>' + content[i] + '</p>'
    }

    const $signature = `<div id='post-signature'>
                            <p>作者：${author}</p>
                            <p>出处：${href}</p>
                            ${custom}
                          </div>`
    $('#cnblogs_post_body').append($signature)
}

export default signature
