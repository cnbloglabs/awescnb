/**
 * 构建代码块复制按钮
 */
import { isPostDetailsPage, isMd } from 'utils/cnblog'
import toast from 'plugins/toast'

/**
 * 构建复制按钮
 */
function createCopyButtons() {
    // $('#cnblogs_post_body, #blog-comments-placeholder')
    const pres = $('#cnblogs_post_body').find('pre')
    if (!pres.length) return
    const fn = isMd() ? 'prepend' : 'before'
    pres.each((index, pre) => {
        $(pre)[fn](`<div class="copy-btns">copy</div>`)
    })
    handleClickCopyButton()
}

/**
 * 点击复制按钮
 */
function handleClickCopyButton() {
    const __MD__ = isMd()
    const position = __MD__ ? 'pre' : '.cnblogs_code'
    $(position).on('click', '.copy-btns', function() {
        console.log()

        const codeAreaTagName = __MD__ ? 'code' : 'pre'

        const code = $(this)
            .siblings(codeAreaTagName)
            .text()

        navigator.clipboard
            .writeText(code)
            .then(() => {
                $(this).text('copied')
                toast('复制成功')
                setTimeout(() => {
                    $(this).text('copy')
                }, 1000)
            })
            .catch(err => {
                console.error('无法复制', err)
            })

        // const sel = window.getSelection()
        // const range = document.createRange()
        // const codeArea = __MD__ ? 'code' : 'pre'

        // sel.removeAllRanges()
        // range.selectNode($(this).siblings(codeArea)[0])
        // sel.addRange(range)

        // const code = sel.anchorNode.innerText
        // const area = $('<textarea></textarea>')

        // area.val(code)
        // area[0].select()

        // document.execCommand('copy')

        // $(this).text('copied')
        // setTimeout(() => {
        //     $(this).text('copy')
        // }, 1000)
    })
}

export default () => {
    if (!isPostDetailsPage()) return
    createCopyButtons()
}
