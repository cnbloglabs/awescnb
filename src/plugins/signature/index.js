// 个性签名在侧边栏构建
import Typed from 'typed.js'
import { signatureConfig } from '@config/plugins'

function build(options) {
    const { selector } = options
    const signature = `<div class='custom-signature'><span></span></div>`
    $(selector).append(signature)
}

function typed(contents) {
    new Typed('.custom-signature span', {
        strings: contents,
        typeSpeed: 70,
    })
}

export default (devOptions, pluginOptions) => {
    const { enable, contents } = signatureConfig(devOptions)
    if (!enable) return
    const pluginConfig = {
        selector: '#sidebar_news',
    }
    if (pluginOptions) {
        Object.assign({}, pluginConfig, pluginOptions)
    }
    build(pluginConfig)
    typed(contents)
}
