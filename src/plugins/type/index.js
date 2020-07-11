// ! no use

import './index.css'
// import Typed from 'typed.js'
import { type, type as loop } from '@camwiegert/typical'

const { enable, contents, isLoop } = window.opts.signature

function signature() {
    if (!enable) return
    const signature = `<div class='custom-signature'></div>`
    $('#sidebar_news').append(signature)

    // 在每一个元素后插入延迟的毫秒数
    let arr = []
    for (let i = 0; i < contents.length; i++) {
        arr.push(contents.slice(i, i + 1))
    }
    arr.forEach(item => {
        item.push(2000)
    })
    arr = [].concat.apply([], arr)

    const element = document.querySelector('.custom-signature')

    isLoop ? type(element, ...arr, loop) : type(element, ...arr)

    // const signature = `<div class='custom-signature'><span></span></div>`
    // new Typed('.custom-signature span', {
    //     strings: contents,
    //     typeSpeed: 70,
    // })
}

export default signature
