import { userAgent } from '@/assets/utils/tools'
import { iconInSvg } from '../utils/tools'
import icons from '../constants/icons'

const options = window.opts.back2top

//  滚动计算
function compute() {
    const percentScrolled = (
        ($(document).scrollTop() /
            ($(document).height() - $(window).outerHeight())) *
        100
    ).toFixed(2)
    const percentageHeight = percentScrolled + '%'
    const floor = Math.floor(percentScrolled)
    const integer = floor === 100 ? floor : `${floor}%`
    $('.percentage').text(integer)
    if (options.type !== 'complex') return
    $('.flow').css({
        height: percentageHeight,
    })
}

// 返回顶部
function setBack2Top() {
    if (userAgent() !== 'pc') return
    if (!options.enable) return

    let $back2top
    if (options.type === 'simple') {
        $back2top = `<div id="back-to-top" style="display: block;">
                        <span class="percentage">0%</span>
                        <span id='back2top-icon'>${iconInSvg(
                            icons.back2top,
                        )}</span>
                      </div>`
    }
    if (options.type === 'complex') {
        $back2top = `<div id="back-to-top" style="display: block;">
                    <div class="flow" style="height: 0%;"></div>
                    <span class="percentage">0%</span>
                    <span id='back2top-icon'>${iconInSvg(icons.back2top)}</span>
                  </div>`
    }

    $($back2top).appendTo('body')

    if (options.right !== '') {
        const toRight = options.right
        $('#back-to-top').css('right', toRight)
    }

    $('#back2top-icon').click(() => {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            300,
        )
    })

    $(window).scroll(() => {
        requestAnimationFrame(compute)
    })
}

function back2top() {
    setBack2Top()
}

export default back2top
