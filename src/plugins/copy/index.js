/**
 * 代码块复制按钮
 */
import { pageName, isMd } from '@/assets/utils/tools'
import toast from '@plugins/toast'

/**
 * 构建复制按钮
 */
function addBtns() {
    let pres = $(
        '#cnblogs_post_body, #blog-comments-placeholder',
    ).find('pre')
    if (!pres.length) return

    const position = isMd() ? 'prepend' : 'before'
    $.each(pres, (index, pre) => {
        $(pre)[position](
            `<div class="copy-btns">copy</div>`,
        )
    })
}

/**
 * 点击事件处理
 */
function click() {
    const position = isMd() ? 'pre' : '.cnblogs_code'
    $(position).on('click', '.copy-btns', function() {
        const sel = window.getSelection()
        const range = document.createRange()
        sel.removeAllRanges()

        isMd()
            ? range.selectNode($(this).siblings('code')[0])
            : range.selectNode($(this).siblings('pre')[0])

        sel.addRange(range)

        const txt = sel.anchorNode.innerText
        const area = $(
            '<textarea name="" id="board" cols="30" rows="10"></textarea>',
        )

        area.val(txt)
        area[0].select()
        document.execCommand('copy')

        $(this).text('copied')
        toast('已复制至剪贴板')

        setTimeout(() => {
            $(this).text('copy')
        }, 1000)
    })
}

export default () => {
    if (pageName() !== 'post') return
    addBtns()
    click()
}
