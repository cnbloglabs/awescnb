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
                                 : location.href.substring(
                                       0,
                                       location.href.lastIndexOf('#'),
                                   )
                         const content = opts.content
                         let custom = ''
                         for (let i = 0; i < content.length; i++) {
                             custom += '<p>' + content[i] + '</p>'
                         }

                         const $signature = `<div id='post-signature'>
                            <p>本文作者：${author}</p>
                            <p>本文链接：${href}</p>
                            ${custom}
                          </div>`

                         //   <p>版权声明：本博客所有文章除特别声明外均为原创，采用 <a href=''>CC BY-NC-SA 4.0</a> 许可协议。转载请在文章开头明显位置注明原文链接和作者等相关信息，明确指出修改（如有），并通过 E-mail 等方式告知，谢谢合作！</p>
                         $('#cnblogs_post_body').append($signature)
                     }

export default signature
