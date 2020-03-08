import { pageName, userAgent, getRandomColor } from '@/assets/js/tools'
import { loadModel, getRandomProperty } from '@/assets/js/tools'
import urls from '@/constants/urls'
import live2dModels from '@/constants/live2dModels'
import NProgress from 'NProgress'
import APlayer from 'APlayer'
import setCanvasSize from './plugins/click.js'
import '../../../node_modules/nprogress/nprogress.css'
import '../../../node_modules/aplayer/dist/aplayer.min.css'

const userOptions = window.userOptions

// 看板娘
const setLive2d = () => {
    const options = userOptions.live2d
    if (!options.enable) return
    if (options.page !== pageName() && options.page !== 'all') return
    if (options.agent !== userAgent() && options.agent !== 'all') return

    const live2dCDN = urls.CDN.live2d
    let model =
        options.model === 'random'
            ? live2dModels[getRandomProperty(live2dModels)]
            : live2dModels[options.model]
    console.log('live2d model：', model)
    const url = `${live2dCDN.url}@${live2dCDN.version}/${model}`
    const $live2d = `<canvas style="position:fixed;${options.position}:0;bottom:0;z-index:3" width="${options.width}" height="${options.height}" id="model"></canvas>`
    $('body').append($live2d)
    $.getScript(
        'https://guangzan.gitee.io/awescnb/assets/js/live2d.min.js',
        () => {
           loadlive2d('model', url)
        }
    )
}

// 鼠标点击效果
const setClickEffects = () => {
    const options = userOptions.click
    if (!options.enable) return
    setCanvasSize()
}

// 打字效果
const typed = () => {
    const options = {
        strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
        typeSpeed: 40,
    }
    var typed = new Typed('.element', options)
}

// 构建页面加载动画
const hideLoading = () => {
    if ($('#loading').length !== 1) return
    $('#loading').fadeOut(300)
}

// 设置主题色
const setThemeColor = () => {
    const option = userOptions.theme.color
    let themeColor = option === 'random' ? getRandomColor('rgba') : option
    $('head').append(`<style>:root{--themeColor: ${themeColor}}<style>`)
}

// 设置网站图标标题
const setHtmlTitleIcon = () => {
    const favicon = userOptions.theme.favicon
    const title = userOptions.theme.title

    if (favicon !== '') {
        $('head').append(`<link rel="icon" href=${favicon} sizes="32x32">`)
    }
    if (title !== '') {
        document.title = title
    }
}

// 设置页面背景
const setBodyBackground = () => {
    const options = userOptions.bodyBackground
    const hasCatalog = $('#catalog').length > 0

    if (!options.enable) return
    if (options.type === 'color') {
        $('body').css('background-color', `${options.value}`)
    } else if (options.type === 'img') {
        $('body').css('background-image', `url(${options.value})`)
        if (!options.repeat) {
            $('body').css({
                'background-repeat': `no-repeat`,
                'background-size': '100% 100%',
                'background-attachment': 'fixed',
            })
        }
    }
    $('#main,#navigator').css('opacity', `${options.opacity}`)
    if (hasCatalog) {
        $('#main').css('opacity', `${options.opacity}`)
    }
}

// 顶部进度条 x
const setTopProgress = () => {
    const options = userOptions.topProgress
    if (!options.enable) return
    if (options.page !== pageName() && options.page !== 'all') return
    if (options.agent !== userAgent() && options.agent !== 'all') return
    NProgress.configure({
        easing: 'ease',
        speed: 500,
        showSpinner: false,
        background: '#000',
    })

    $(document).on('page:fetch', function() {
        NProgress.start()
    })
    $(document).on('page:change', function() {
        NProgress.done()
    })
    $(document).on('page:restore', function() {
        NProgress.remove()
    })
}

// 音乐播放器 √
const setMusicPlayer = () => {
    const options = userOptions.musicPlayer

    if (!options.enable) return
    if (options.page !== pageName() && options.page !== 'all') return
    if (options.agent !== userAgent() && options.agent !== 'all') return

    $('body').append('<div id="player" class="aplayer music-APlayer"></div>')

    const ap = new APlayer({
        container: document.getElementById('player'),
        fixed: true,
        preload: 'auto',
        autoplay: options.autoplay,
        audio: options.audio,
    })

    window.onbeforeunload = () => {
        const audioTime = ap.audio.currentTime
        localStorage.audioTime = audioTime
    }
    window.onload = () => {
        ap.seek(localStorage.audioTime ? Number(localStorage.audioTime) : 0)
    }
}

export {
    setHtmlTitleIcon,
    setTopProgress,
    setLive2d,
    setMusicPlayer,
    setThemeColor,
    setBodyBackground,
    hideLoading,
    setClickEffects,
}
