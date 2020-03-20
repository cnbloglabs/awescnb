import { loadFiles } from '../utils/tools'
import { script } from '../constants/urls'
import { pageName } from '@/assets/js/tools'

// 设置代码行号
function linenumbers() {
    if (pageName() !== 'post') return
    const options = window.opts.lineNumbers
    if (!options.enable) return
    loadFiles(
        [
            {
                name: script.lineNumbers,
                type: 'js',
            },
        ],
        () => {
            hljs.initLineNumbersOnLoad()
        },
    )
}

export default linenumbers
