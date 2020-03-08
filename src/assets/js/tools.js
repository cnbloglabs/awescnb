
// 这里有许多的公共的方法供所有主题使用
import { urls } from '@/constants/urls'
/**
 * @description
 * @param {Array} files [{name: '', type: 'js | css | jsCDN | cssCDN'}]
 * @param {Function} callback 回调函数 只能走一个
 */

const loadFiles = (files, callback = function() {}) => {
    const repositoriesUrl = urls.repositories.package + '/assets'
    for (let i = 0; i < files.length; i++) {
        const name = files[i].name
        const type = files[i].type
        const cssUrl = repositoriesUrl + '/css/' + name + '.css'
        const jsUrl = repositoriesUrl + name + '.min.js'
        const actions = {
            css: () => {
                $('head').append(`<link rel="stylesheet" href="${cssUrl}">`)
            },
            js: () => {
                $.getScript(jsUrl, () => {
                    callback()
                })
            },
            cssCDN: () => {
                $('head').append(`<link rel="stylesheet" href="${name}">`)
            },
            jsCDN: () => {
                $.getScript(name)
            },
            default: () => {
                console.error('Type error!')
            },
        }
        actions[type]()
    }
}

/**
 * @description 防抖函数
 * @param {Function} func 传入的函数
 * @param {Number} wait 等待
 * @param {Boolean} immediate 立即
 * @returns Function 返回的函数
 */
const debounce = (func, wait, immediate) => {
    var timeout
    return function() {
        var context = this,
            args = arguments
        var later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

/**
 * @description 指定icon插入svg
 * @param {String} icon xlink:href 的值
 * @returns svg标签
 */
const iconInSvg = icon => {
    return `<svg class="icon" aria-hidden="true"><use xlink:href="${icon}"></use></svg>`
}

/**
 * @description 随机对象属性
 * @param {Object} obj javascript对象
 * @returns 对象的随机属性
 */
const getRandomProperty = obj => {
    let result
    let count = 0
    for (let prop in obj) if (Math.random() < 1 / ++count) result = prop
    return result
}

/**
 * @description 获取随机颜色
 * @param {String} type 可选 颜色值类型 rgba 16
 * @returns 颜色值
 */
const getRandomColor = type => {
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
const getClientRect = client => {
    const { top, bottom, left, right, height, width } = client.getBoundingClientRect()
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
const getRandomNum = (max, min) => {
    parseInt(Math.random() * (max - min + 1) + min, 10)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 隐藏loading
const hideLoading = () => {
    $('#loading').fadeOut(800)
}

// 文章内容是否存在标题
// 文章是否有可用来生成目录的标题
const hasPostTitle = () => {
    return $(
        '#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4'
    ).length === 0
        ? false
        : true
}

/**
 * @description 返回当前页面名称
 * @returns 'post' | 'index' | 'tag' | 'list' | 'tag' | 'taglist'
 */
const pageName = () => {
    if ($('#post_detail').length > 0) {
        return 'post'
    }
    if ($('.day').length > 0) {
        return 'index'
    }
    if ($('#taglist_main').length > 0) {
        return 'tag'
    }
    if ($('.entrylistPosttitle').length > 0) {
        return 'list'
    }
    if ($('#myposts').length > 0) {
        return 'tag'
    }
}

/**
 * @description 返回用户设备
 * @returns 'pc' | 'phone'
 */
const userAgent = () => {
    const width = $(window).width()
    return width > 768 ? 'pc' : 'phone'
}

export {
    loadFiles,
    debounce,
    getRandomProperty,
    getRandomColor,
    getClientRect,
    getRandomNum,
    hideLoading,
    iconInSvg,
    pageName,
    userAgent,
}
