import './index.css'
import { pageName, getData } from '@tools'
import Typed from 'typed.js'
import env from '@constants/env'
// import { bing } from '@constants/api'

const opts = window.opts.lock

let { avatar, signature } = window.opts.theme
if (env === 'dev') {
    avatar = 'https://www.dummyimage.com/50'
}

function build() {
    const ele = `
    <div id='lock-screen'>
        <div class="lock-screen-weather"></div>
        <div class="lock-screen-user">
            <img src="${avatar}" alt=""/>
            <div class='lock-screen-text'>
                <span></span>
            </div>
        </div>
        <div class="lock-screen-close">🔑</div>
    </div>`
    $('body')
        .append(ele)
        .addClass('overflow')
    typed()
}

function background() {
    getData('https://lab.isaaclin.cn/nCoV/api/overall', 'get', data => {
        console.log(data)
    })
}

function typed() {
    const options = {
        strings: [
            '<i>First</i> sentence.',
            '&amp; a second sentence.',
            signature,
        ],
        typeSpeed: 300,
    }
    new Typed('.lock-screen-text span', options)
}

function click() {
    $(document).on('click', '.lock-screen-close', () => {
        $('#lock-screen').hide()
        $('body').removeClass('overflow')
    })
}

function lock() {
    if (!opts.enable) return
    if (pageName() !== 'index') return
    build()
    click()
    background()
}

export default lock
