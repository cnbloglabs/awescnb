// 双击 header 下拉锁屏

import './index.css'
import Typed from 'typed.js'
import env from '@constants/env'
import { randomImage, dummyimage } from '@constants/urls'

const { enable, background, strings } = window.opts.lock
const { avatar } = window.opts.theme
let typed

const typedOpts = {
    strings,
    typeSpeed: 100,
}

// 创建元素
function build() {
    let image
    image = env === 'dev' ? dummyimage : avatar
    const ele = `
    <div class='lock-screen'>
        <div class="lock-screen-weather"></div>
        <div class="lock-screen-user">
            <img src="${image}" alt=""/>
            <div class='lock-screen-text'>
                <span></span>
            </div>
        </div>
        <div class="lock-screen-close">🔑</div>
    </div>`
    $('body').append(ele)
}

// 设置背景
function setBackground() {
    let image
    if (env === 'dev') {
        image = dummyimage
    } else {
        image = background === '' ? randomImage : background
    }
    $('.lock-screen').css('background-image', `url(${image}/red)`)
}

// 打开
function open() {
    $('#header').dblclick(function() {
        $('body').addClass('overflow')
        $('.lock-screen').css('top', '0')
        typed = new Typed('.lock-screen-text span', typedOpts)
    })
}

// 关闭
function close() {
    $(document).on('click', '.lock-screen-close', () => {
        $('.lock-screen').css('top', '-100vh')
        typed.destroy()
        setTimeout(() => {
            $('body').removeClass('overflow')
        }, 400)
    })
}

function lock() {
    if (!enable) return
    build()
    setBackground()
    open()
    close()
}

export default lock
