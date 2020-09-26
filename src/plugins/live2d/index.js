// 设置看板娘
// 引入即可

import env from '@/constants/env'
import live2dModels from '@/constants/live2dModels'
import { live2d, live2djs } from '@constants/urls'
import { live2dConfig } from '@config/plugins.js'
import {
    pageName,
    userAgent,
    cacheScript,
    randomProperty,
} from '@tools'

export default devOptions => {
    const options = live2dConfig(devOptions)
    if (!options.enable) return
    if (
        options.page !== pageName() &&
        options.page !== 'all'
    )
        return
    if (
        options.agent !== userAgent() &&
        options.agent !== 'all'
    )
        return

    let model =
        options.model === 'random'
            ? live2dModels[randomProperty(live2dModels)]
            : live2dModels[options.model]
    if (env === 'dev') {
        // console.log('live2d model：', model)
    }

    const ele = `<canvas id="model" style="position:fixed;${options.position}:0;bottom:0;z-index:30;pointer-events: none;" width="${options.width}"height="${options.height}" > </canvas>`
    $('body').append(ele)

    // gap
    if (options.gap !== 'default') {
        $('#model').css(options.position, options.gap)
    }

    // load
    const url = `${live2d.url}@${live2d.version}/${model}`
    cacheScript(live2djs, () => {
        loadlive2d('model', url)
    })
}
