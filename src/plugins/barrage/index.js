// 发送弹幕
// 仅引入即可

import './index.css'
import {
    pageName,
    getClientRect,
    randomNum,
    randomColor,
} from '@/assets/utils/tools'

const options = window.opts.barrage

/**
 * @description 发送弹幕
 * @param {Array} textList 弹幕列表
 */
function shootBarrage(textList) {
    if (!options.enable) return
    if (!document.querySelector('#barrage-wrap'))
        $('body').append(`<div id='barrage-wrap'></div>`)
    const $wrap = document.querySelector('#barrage-wrap')
    const rect = getClientRect($wrap)
    const wrapWidth = rect.right - rect.left
    const wrapHeight = rect.bottom - rect.top

    textList.forEach(text => {
        const $barrage = document.createElement('span')
        const barrageStyle = `
									left: ${wrapWidth}px;
									top: ${randomNum(wrapHeight - 20, 1)}px;
									color: ${randomColor(options.colors)};
									opacity: ${options.opacity};
								`
        $barrage.style.cssText = barrageStyle
        $barrage.innerText = text
        $wrap.appendChild($barrage)
        const roll = timer => {
            const now = +new Date()
            const rect = getClientRect($barrage)
            let left = $barrage.offsetLeft
            roll.last = roll.last || now
            roll.timer = roll.timer || timer
            if (left < rect.left - rect.right) {
                $($barrage).remove()
            } else {
                if (now - roll.last >= roll.timer) {
                    roll.last = now
                    left -= 3
                    $barrage.style.left = `${left}px`
                }
                window.requestAnimationFrame(roll)
            }
        }
        const randomSpeed = randomNum(100, 1)
        roll(randomSpeed)
    })
}

// 发送预定义弹幕
// 随笔页首页
function shootInitial() {
    if (options.barrages.length !== 0) {
        setTimeout(() => {
            shootBarrage(options.barrages)
        }, 3000)
    }

    if (pageName() === 'post' && options.postPageBarrages.length !== 0) {
        setTimeout(() => {
            shootBarrage(options.postPageBarrages)
        }, 3000)
    }

    if (pageName() === 'index' && options.indexBarrages.length !== 0) {
        setTimeout(() => {
            shootBarrage(options.indexBarrages)
        }, 3000)
    }
}

// 发送自定义弹幕
// 类似消息弹窗
function shootCustom(list) {
    shootBarrage(list)
}

export { shootInitial, shootCustom }
