// 设置看板娘
// 引入即可

import { pageName, userAgent, cacheScript, getRandomProperty } from '@tools'
import { live2d, js } from '@constants/urls'
import live2dModels from '@/constants/live2dModels'
import env from '@/constants/env'

// 看板娘
const setLive2d = () => {
    const options = window.opts.live2d
    if (!options.enable) return
    if (options.page !== pageName() && options.page !== 'all') return
    if (options.agent !== userAgent() && options.agent !== 'all') return

    let model =
        options.model === 'random'
            ? live2dModels[getRandomProperty(live2dModels)]
            : live2dModels[options.model]
    if (env === 'dev') {
        console.log('live2d model：', model)
    }

    const ele = `<canvas id="model" style="position:fixed;${options.position}:0;bottom:0;z-index:3" width="${options.width}"height="${options.height}" > </canvas>`
    $('body').append(ele)
    const url = `${live2d.url}@${live2d.version}/${model}`
    cacheScript(`${js}/live2d.min.js`, () => {
        loadlive2d('model', url)
    })
}

export default setLive2d
