import { pageName } from '@/assets/utils/tools'
// import '@/assets/js/linenumbers'

// 设置代码行号
function linenumbers() {
    const options = window.opts.lineNumbers
    if (pageName() !== 'post') return
    if (!options.enable) return
    require('@/assets/js/linenumbers')
    hljs.initLineNumbersOnLoad()
}

export default linenumbers
