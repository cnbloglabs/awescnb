// 设置代码行号
// 引入即可

import { pageName } from '@/assets/utils/tools'

function linenumbers() {
    const options = window.opts.lineNumbers
    if (pageName() !== 'post') return
    if (!options.enable) return
    require('@/assets/js/linenumbers')
    hljs.initLineNumbersOnLoad()
}

export default linenumbers
