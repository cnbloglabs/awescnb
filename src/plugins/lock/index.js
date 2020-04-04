import './index.css'
import Typed from 'typed.js'
import env from '@constants/env'
import { randomImage, dummyimage } from '@constants/urls'
const { enable, background, strings } = window.opts.lock
const { avatar } = window.opts.theme
let typed

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

function typeEffects() {
    typed = new Typed('.lock-screen-text span', {
        strings,
        typeSpeed: 100,
    })

    console.log(typed)
}

function setBackground() {
    let image
    if (env === 'dev') {
        image = dummyimage
    } else {
        image = background === '' ? randomImage : background
    }
    $('.lock-screen').css('background-image', `url(${image}/red)`)
}

function open() {
    $('#navigator').dblclick(function() {
        $('body').addClass('overflow')
        $('.lock-screen').css('top', '0')
        typed.start()
    })
}

function close() {
    $(document).on('click', '.lock-screen-close', () => {
        $('.lock-screen').css('top', '-100vh')
        typed.reset()
        setTimeout(() => {
            $('body').removeClass('overflow')
        }, 400)
    })
}

function lock() {
    if (!enable) return
    build()
    typeEffects()
    setBackground()
    open()
    close()
}

export default lock
