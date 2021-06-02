/**
 * 将字符串复制到剪贴板
 * @param text 要复制的字符串
 */
export function copyToClipboard(text) {
    const dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = text
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
}

/**
 * 监听 DOM 变化
 * @param {*} selector Dom selector
 * @param {*} callback retun Promise
 */
export function createMutationObserve(selector, callback) {
    const observer = new MutationObserver(() => {
        callback().then(() => {
            observer.disconnect()
        })
    })
    observer.observe(selector, {
        attributes: true,
        childList: true,
        subtree: true,
    })
}

/**
 * HTML反转义
 * @param {String} string
 */
export function HTMLDecode(str) {
    return $('<textarea/>')
        .html(str)
        .text()
}

/**
 * 插入css
 * @param {String} stylesheet
 */
export function insertStyle(style) {
    let styleElement = document.createElement('style')
    styleElement.innerHTML = style
    document.getElementsByTagName('head')[0].appendChild(styleElement)
}

/**
 * 监听鼠标滚轮
 * @param {Function} upCallback 向上滚动回调
 * @param {Function} downCallback 向下滚动回调
 */
export function mousewheel(upCallback, downCallback) {
    if (!downCallback) downCallback = upCallback
    const removeListener = () => {
        $(document).unbind('mousewheel DOMMouseScroll')
    }
    const up = () => {
        upCallback()
        removeListener()
    }
    const down = () => {
        upCallback()
        removeListener()
    }
    $(document).on('mousewheel DOMMouseScroll', function(e) {
        // e.preventDefault()
        const wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail
        const delta = Math.max(-1, Math.min(1, wheel))
        delta < 0 ? up() : down()
    })
}

/**
 * 获取季节
 */
export function getQuarter() {
    let month = new Date().getMonth()
    if (month < 3) {
        return 'Spring'
    } else if (month < 6) {
        return 'Summer'
    } else if (month < 9) {
        return 'autumn'
    } else if (month < 12) {
        return 'Winter'
    }
}

/**
 * 获取引文月份
 * @returns {String} Month
 */
export function getMonth() {
    const monthsInEng = [
        'Jan',
        'Feb',
        'March',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ]
    const month = new Date().getMonth()
    return monthsInEng[month]
}

/**
 * @description 元素是否在视口范围内
 * @param {el} Object
 */
export function isElementInViewport(el) {
    let rect = el.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    )
}

/**
 * @description 创建link标签
 * @param {String} href
 */
export function addCss(href) {
    $('head').append('<link>')
    const toolbarCss = $('head').children(':last')
    toolbarCss.attr({
        rel: 'stylesheet',
        type: 'text/css',
        href,
    })
}

/**
 * @description 是否为夜间
 */
export function isNight() {
    const nowHour = new Date().getHours()
    const isNight = nowHour > 19 || nowHour <= 5
    return isNight
}

/**
 * @description prettier console.log
 * @param {str} String
 * @param {color} String
 */
export function prettyLog(str, color = '#ffb3cc') {
    console.log(`%c  ${str}`, `color: ${color}; font-weight: bold;`)
}

/**
 * @description 获取当前日期
 * @returns {String} today
 */
export function getDate() {
    const time = new Date()
    const year = time.getFullYear()
    const month = ('0' + (time.getMonth() + 1)).slice(-2)
    const day = ('0' + time.getDate()).slice(-2)
    // const hour = ('0' + time.getHours()).slice(-2)
    // const minute = ('0' + time.getMinutes()).slice(-2)
    // const second = ('0' + time.getSeconds()).slice(-2)
    const today = `${year}-${month}-${day}`
    return today
}

/**
 * @description 获取数组中随机元素
 * @param {arr} Array
 * @param {count} Number
 * @returns {any}
 */
export function randomArrayElements(arr, count = 1) {
    let shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp,
        index
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random())
        temp = shuffled[index]
        shuffled[index] = shuffled[i]
        shuffled[i] = temp
    }
    return shuffled.slice(min)
}

/**
 * @description sleep
 * @param {time} Number await time
 * @returns {Promise}
 */
export async function sleep(time) {
    return new Promise(res => setTimeout(res, time))
}

// 获取一个随机image url
// 使用内置的 imagehost url
// 无需参数
export function randomImgurl() {
    const animeImages = 'https://api.mz-moe.cn/img'
    const random = Math.floor(Math.random() * 950)
    const url = `${animeImages}/img${random}.jpg`
    return url
}

/**
 * @description 滚动穿透处理
 * @param {show} Boolean
 */
export function unpass(show) {
    if (show) {
        let body = document.body
        body.style.position = ''
        let top = body.style.top
        document.body.scrollTop = document.documentElement.scrollTop = -parseInt(
            top,
        )
        body.style.top = ''
    } else {
        let scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop
        document.body.style.cssText +=
            'position:fixed;width:100%;top:-' + scrollTop + 'px;'
    }
}

/**
 * @description 轮询
 * @param {condition} 条件
 * @param {func} 函数
 * @returns {Boolean} 是否完成 callback
 */
export function poll(condition, callback) {
    const fn = callback
    if (condition) {
        const res = fn()
        if (typeof res === 'boolean' || typeof res === 'string') {
            return res
        }
        return true
    } else {
        let count = 1
        let intervalId = setInterval(() => {
            if (condition) {
                const res = fn()
                if (typeof res === 'boolean' || typeof res === 'string') {
                    return res
                }
                clearInterval(intervalId)
                return true
            }
            if (count === 50) {
                clearInterval(intervalId)
                return false
            }
            count++
        }, 300)
    }
}

/**
 * @description add a script and cache it
 * @param {url} String
 * @param {callback} Function
 */
export function cacheScript(url, callback = function() {}) {
    $.ajax({
        type: 'GET',
        dataType: 'script',
        cache: true,
        url,
        success() {
            callback()
        },
    })
}

/**
 * @description 防抖
 * @param {Function} func 传入的函数
 * @param {Number} wait 等待
 * @param {Boolean} immediate 立即
 * @returns Function 返回的函数
 */
export function debounce(func, wait, immediate) {
    let timeout
    return function() {
        let context = this,
            args = arguments
        let later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

/**
 * 节流
 * @param {*} func
 * @param {*} wait
 * @param {*} mustRun
 */
export function throttle(func, wait, mustRun) {
    let timeout,
        startTime = new Date()

    return function() {
        let context = this,
            args = arguments,
            curTime = new Date()

        clearTimeout(timeout)

        if (curTime - startTime >= mustRun) {
            func.apply(context, args)
            startTime = curTime
        } else {
            timeout = setTimeout(func, wait)
        }
    }
}

/**
 * @description 随机对象属性
 * @param {Object} obj javascript对象
 * @returns 对象的随机属性
 */
export function randomProperty(obj) {
    let result
    let count = 0
    for (let prop in obj) if (Math.random() < 1 / ++count) result = prop
    return result
}

/**
 * @description 获取随机颜色
 * @param {String} type rgba 16
 * @returns 颜色值
 */
export function randomColor(type) {
    let res = ''
    if (type === 'rgba') {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const a = 0.6
        res = `rgba(${r},${g},${b},${a})`
    } else if (type === '16') {
        res = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    } else {
        const colors = type || [
            '#FE0302',
            '#FF7204',
            '#FFAA02',
            '#FFD302',
            '#FFFF00',
            '#A0EE00',
            '#00CD00',
            '#019899',
            '#4266BE',
            '#89D5FF',
            '#CC0273',
            '#CC0273',
        ]
        const random = Math.floor(Math.random() * colors.length)
        res = colors[random]
    }
    return res
}

/**
 * @description 获取元素相对与浏览器视口的位置
 * @param {Object} client document对象
 * @returns top, bottom, left, right, height, width
 */
export function getClientRect(el) {
    const {
        top,
        bottom,
        left,
        right,
        height,
        width,
    } = el.getBoundingClientRect()
    return {
        top,
        bottom,
        left,
        right,
        height: height || bottom - top,
        width: width || right - left,
    }
}

/**
 * @description 生成随机数 []
 * @param {Number} max 最大值
 * @param {Number} min 最小值
 * @returns 介于最大值与最小值闭区间的随机数
 */
export function randomNum(max, min) {
    parseInt(Math.random() * (max - min + 1) + min, 10)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * @description 返回用户设备
 * @returns 'pc' | 'phone'
 */
export function userAgent() {
    const width = $(window).width()
    return width > 768 ? 'pc' : 'phone'
}

/**
 * @description 判断字符串是否为 http 网址
 * @returns {Boolean}
 */
export function isUrl(string) {
    return new RegExp('http').test(string)
}
