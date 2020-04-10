// 代码块复制按钮
// 引入即可

import './index.css'
import { pageName, edtType } from '@/assets/utils/tools'
import toast from '@plugins/toast'


// 添加按钮
function addBtns(type) {
    let pres = $('#cnblogs_post_body, #blog-comments-placeholder').find('pre')
    if (!pres.length) return

    if (type === 'md') {
        $.each(pres, (index, pre) => {
            $(pre).prepend(`<div class="copy-btns">copy</div>`)
        })
    } else {
        $.each(pres, (index, pre) => {
            $(pre).before(`<div class="copy-btns">copy</div>`)
        })
    }
}


// 点击事件
function click(type) {
    const position = type === 'md' ? 'pre' : '.cnblogs_code'
    $(position).on('click', '.copy-btns', function() {
        const sel = window.getSelection()
        const range = document.createRange()
        sel.removeAllRanges()

        type === 'md'
            ? range.selectNode($(this).siblings('code.hljs')[0])
            : range.selectNode($(this).siblings()[0])

        sel.addRange(range)

        const txt = sel.anchorNode.innerText
        const area = $(
            '<textarea name="" id="board" cols="30" rows="10"></textarea>',
        )

        area.val(txt)
        area[0].select()
        document.execCommand('copy')

        $(this).text('copied')
        toast('代码已复制✔')
    })
}

function copy() {
    if (pageName() !== 'post') return
    const editorType = edtType()
    addBtns(editorType)
    click(editorType)
}

export default copy
