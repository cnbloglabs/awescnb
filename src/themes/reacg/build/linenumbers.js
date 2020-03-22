import { pageName } from '@/assets/utils/tools'
import '@/assets/js/linenumbers'

// 设置代码行号
function linenumbers() {
    if (pageName() !== 'post') return
    const options = window.opts.lineNumbers
    if (!options.enable) return
    hljs.initLineNumbersOnLoad()
}

export default linenumbers
