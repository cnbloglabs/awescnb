// 个性签名在侧边栏构建
import Typed from 'typed.js'
import { signatureConfig } from '@config/plugins'

function build(selector) {
    const el = `<div class='custom-signature'><span></span></div>`
    $(selector).append(el)
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

    let pluginConfig = {
        selector: '#sidebar_news',
    }

    if (pluginOptions) {
        pluginConfig = Object.assign(
            {},
            pluginConfig,
            pluginOptions,
        )
    }

    const { selector } = pluginConfig

    build(selector)
    typed(contents)
}
