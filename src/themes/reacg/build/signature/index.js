// 获取博客园子标题
// 作为个性签名在侧边栏构建
import './index.css'
import Typed from 'typed.js'

const { enable, contents } = window.opts.signature

function build() {
    const signature = `<div class='custom-signature'><span></span></div>`
    $('#sidebar_news').append(signature)
}

function typed() {
    new Typed('.custom-signature span', {
        strings: contents,
        typeSpeed: 70,
    })
}

function signature() {
    if (!enable) return
    build()
    typed()
}

export default signature
