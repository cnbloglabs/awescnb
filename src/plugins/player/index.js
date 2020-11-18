// 音乐播放器
import { aplayerjs, aplayercss } from '@constants/urls'
import { musicPlayerConfig } from '@config/plugins'

import {
    pageName,
    userAgent,
    cacheScript,
    addCss,
} from '@/assets/utils/tools'

/**
 * 构建音乐播放器
 * @param {*} autoplay
 * @param {*} audio
 * @param {*} volume
 * @param {*} lrc
 */
function build(autoplay, audio, volume, lrc) {
    $('body').append(
        '<div id="player" class="aplayer music-APlayer"></div>',
    )

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
        ap.seek(
            localStorage.audioTime
                ? Number(localStorage.audioTime)
                : 0,
        )
    }

    if (autoplay) {
        $('.aplayer-lrc').show()
    }

    if (lrc.enable) {
        ap.on('play', () => {
            $('.aplayer-lrc').show()
        })
        ap.on('pause', () => {
            // console.log('pause')
            $('.aplayer-lrc').hide()
        })
    }

    if (lrc.enable && lrc.color !== '') {
        $('.aplayer-lrc').css('color', lrc.color)
    }
}

export default devOptions => {
    const {
        enable,
        page,
        agent,
        autoplay,
        audio,
        volume,
        lrc,
    } = musicPlayerConfig(devOptions)

    if (!enable) return
    if (page !== pageName() && page !== 'all') return
    if (agent !== userAgent() && agent !== 'all') return
    addCss(aplayercss)
    cacheScript(aplayerjs, () => {
        build(autoplay, audio, volume, lrc)
    })
}
