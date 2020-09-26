// 锁屏
import Typed from 'typed.js'
import { getThemeOptions } from '@config/extra'
import { randomImage } from '@constants/urls'
import { lockConfig } from '@config/plugins'

const { avatar } = getThemeOptions()
let typed

// 创建元素
function build() {
    const ele = `
    <div class='lock-screen'>
        <div class="lock-screen-weather"></div>
        <div class="lock-screen-user">
            <img src="${avatar}" alt=""/>
            <div class='lock-screen-text'>
                <span></span>
            </div>
        </div>
        <div class="lock-screen-close">🔑</div>
    </div>`
    $('body').append(ele)
}

// 设置背景
function setBackground(background) {
    const image =
        background === '' ? randomImage : background
    $('.lock-screen').css(
        'background-image',
        `url(${image}/red)`,
    )
}

// 打开
function open(strings) {
    const typedOpts = {
        strings: strings.length
            ? strings
            : ['快去自定义你的个性签名吧~'],
        typeSpeed: 100,
    }
    $('#header').dblclick(function() {
        $('body').addClass('overflow')
        $('.lock-screen').css('top', '0')
        typed = new Typed(
            '.lock-screen-text span',
            typedOpts,
        )
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

export default devOptions => {
    const { enable, background, strings } = lockConfig(
        devOptions,
    )
    if (!enable) return
    build()
    setBackground(background)
    open(strings)
    close()
}
