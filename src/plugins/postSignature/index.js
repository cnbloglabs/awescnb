import { pageName } from '@/assets/utils/tools'
import './index.css'
const opts = window.opts.postSignature

// 设置随笔签名
function postSignature() {
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
                            <p>本文作者：${author}</p>
                            <p>本文链接：${href}</p>
                            <p>版权声明：本作品采用<a href='${opts.licenseLink}'>知识共享署名-非商业性使用-禁止演绎 2.5 中国大陆许可协议</a>进行许可。如您有任何疑问或者授权方面的协商，请给我留言。</p>
                            ${custom}
                          </div>`
    $('#cnblogs_post_body').append($signature)
}

export default postSignature
