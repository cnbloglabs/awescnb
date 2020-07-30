// 个性签名在侧边栏构建
import './index.css'
import Typed from 'typed.js'

const { enable, contents } = window.opts.signature

function build(options) {
    const { selector } = options
    const signature = `<div class='custom-signature'><span></span></div>`
    $(selector).append(signature)
}

function typed() {
    new Typed('.custom-signature span', {
        strings: contents,
        typeSpeed: 70,
    })
}

function signature(options) {
    if (!enable) return
    const defaultOptions = {
        selector: '#sidebar_news',
    }
    if (options) $.extend(true, defaultOptions, options)
    build(options)
    typed()
}

export default signature
