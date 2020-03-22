import { pageName, userAgent } from '@/assets/utils/tools'
import { getRandomProperty } from '@/assets/utils/tools'
import { CDN } from '@/constants/urls'
import live2dModels from '@/constants/live2dModels'

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

    console.log('live2d model：', model)

    $('body').append(`<canvas style="
                                position:fixed;${options.position}:0;
                                bottom:0;z-index:3" width="${options.width}" 
                                height="${options.height}" id="model">
                     </canvas>`)

    const url = `${CDN.live2d.url}@${CDN.live2d.version}/${model}`

    $.getScript(
        'https://guangzan.gitee.io/imagehost/awescnb/js/live2d.min.js',
        () => {
            loadlive2d('model', url)
        },
    )
}

export default setLive2d
