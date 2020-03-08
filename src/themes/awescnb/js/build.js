import { userOptions } from '@/assets/js/merge'
import { pageName, userAgent, getRandomColor } from '@/assets/js/tools'
import NProgress from 'NProgress'
import APlayer from 'APlayer'
import '../../../../node_modules/nprogress/nprogress.css'
import '../../../../node_modules/aplayer/dist/aplayer.min.css'
import '../css/index.css'

// 构建页面加载动画
const hideLoading = () => {
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

    if (favicon === '') return
    $('head').append(`<link rel="icon" href=${favicon} sizes="32x32">`)
    if (title === '') return
    document.title = title
}

// 设置页面背景
const setBodyBackground = () => {
    const options = userOptions.bodyBackground

    if (!options.enable) return
    $('#main,#navigator').css('opacity', `${options.opacity}`)
    if ($('#catalog').length > 0) {
        $('#main').css('opacity', `${options.opacity}`)
    }
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

// 看板娘
const setLive2d = () => {
    const options = userOptions.topProgress
    const pageName = pageName()
    const userAgent = userAgent()
    if (!options.enable) {
        return
    }
    if (options.page !== pageName && options.page !== 'all') {
        return
    }
    if (options.agent !== userAgent && options.agent !== 'all') {
        return
    }
    const live2dCDN = urls.CDN.live2d
    let model =
        options.model === 'random'
            ? live2dModels[this.getRandomProperty(live2dModels)]
            : live2dModels[options.model]
    console.log('live2d model：', model)
    const url = `${live2dCDN.url}@${live2dCDN.version}/${model}`
    $('body').append(
        `<canvas style="position:fixed;${options.position}:0;bottom:0;z-index:3" width="${options.width}" height="${options.height}" id="model"></canvas>`
    )
    this.loadFiles([{ name: urls.script.live2d, type: 'js' }], () => {
        loadlive2d('model', url)
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

// 鼠标点击特效
const setClickEvent = () => {
    const options = this.defaultOptions.click
    if (!options.enable) {
        return
    }
    if (options.page !== this.pageName && options.page !== 'all') {
        return
    }
    if (options.agent !== this.userAgent && options.agent !== 'all') {
        return
    }
    $('body').append('<canvas class="fireworks" style="pointer-events: none;"></canvas>')
    this.loadFiles([{ name: urls.script.anime, type: 'js' }], () => {
        this.loadFiles([{ name: urls.script.handleAnime, type: 'js' }])
    })
}

export {
    setHtmlTitleIcon,
    setTopProgress,
    setLive2d,
    setMusicPlayer,
    setClickEvent,
    setThemeColor,
    setBodyBackground,
    hideLoading,
}
