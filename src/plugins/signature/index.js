// 个性签名
import { signatureConfig } from 'options/plugins'
import { typedJs } from 'constants/libs'
import { loadScript } from 'utils/helpers'

/**
 * 构建容器
 * @param {*} selector
 */
function build(selector) {
    const el = `<div class='custom-signature'><span></span></div>`
    $(selector).append(el)
}

/**
 * 构建打字机效果
 * @param {*} contents
 */
function typed(contents) {
    loadScript(typedJs, () => {
        new Typed('.custom-signature span', {
            strings: contents,
            typeSpeed: 70,
        })
    })
}

export default (theme, devOptions, pluginOptions) => {
    const { enable, contents } = signatureConfig(devOptions)
    if (!enable) return

    let pluginConfig = {
        selector: '#sidebar_news',
    }

    if (pluginOptions) {
        pluginConfig = Object.assign({}, pluginConfig, pluginOptions)
    }

    const { selector } = pluginConfig

    build(selector)
    typed(contents)
}
