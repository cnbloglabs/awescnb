// 音乐播放器
// 引入即可

import './index.scss'
import { pageName, userAgent, cacheScript, addCss } from '@/assets/utils/tools'
import { aplayerjs, aplayercss } from '@constants/urls'

const {
    enable,
    autoplay,
    audio,
    page,
    agent,
    volume,
    lrc,
} = window.opts.musicPlayer

// 音乐播放器
function build() {
    $('body').append('<div id="player" class="aplayer music-APlayer"></div>')

    const ap = new APlayer({
        container: document.getElementById('player'),
        fixed: true,
        preload: 'auto',
        autoplay,
        volume,
        lrcType: lrc.enable ? lrc.type : null,
        audio,
    })

    window.onbeforeunload = () => {
        const audioTime = ap.audio.currentTime
        localStorage.audioTime = audioTime
    }
    window.onload = () => {
        ap.seek(localStorage.audioTime ? Number(localStorage.audioTime) : 0)
    }

    if (autoplay) {
        $('.aplayer-lrc').show()
    }

    if (lrc.enable) {
        ap.on('play', () => {
            $('.aplayer-lrc').show()
        })
        ap.on('pause', () => {
            console.log('pause')
            $('.aplayer-lrc').hide()
        })
    }

    if (lrc.enable && lrc.color !== '') {
        $('.aplayer-lrc .aplayer-lrc-contents p').css('color', lrc.color)
    }
}

function setMusicPlayer() {
    if (!enable) return
    if (page !== pageName() && page !== 'all') return
    if (agent !== userAgent() && agent !== 'all') return
    addCss(aplayercss)
    cacheScript(aplayerjs, build)
}

export default setMusicPlayer
