// 构建代码行号
import { pageName, cacheScript } from '@tools'
import { linenumbersjs } from '@constants/urls'

function build() {
    hljs.initLineNumbersOnLoad({
        singleLine: true,
    })
}

function linenumbers() {
    const { enable } = window.opts.lineNumbers
    if (pageName() !== 'post') return
    if (!enable) return
    if ($('.cnblogs_code').length > 0) return
    cacheScript(linenumbersjs, build)
}

export default linenumbers
