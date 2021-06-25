// 音乐播放器
import { aplayerjs, aplayercss } from 'constants/libs'
import { musicPlayerConfig } from 'options/plugins'
import { userAgent, loadScript, loadLink } from 'utils/helpers'
import { getCurrentPage } from 'utils/cnblog'

/**
 * 构建音乐播放器
 * @param {*} autoplay
 * @param {*} audio
 * @param {*} volume
 * @param {*} lrc
 */
function buildPlayer(autoplay, audio, volume, lrc) {
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

    if (localStorage.playerState === 'on') {
        ap.play()
    }

    ap.on('play', () => {
        localStorage.playerState = 'on'
        if (lrc.enable) {
            $('.aplayer-lrc').show()
        }
    })

    ap.on('pause', () => {
        localStorage.playerState = 'off'
        if (lrc.enable) {
            $('.aplayer-lrc').hide()
        }
    })

    if (lrc.enable && lrc.color !== '') {
        $('.aplayer-lrc').css('color', lrc.color)
    }
}

export default (theme, devOptions) => {
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
    if (page !== getCurrentPage() && page !== 'all') return
    if (agent !== userAgent() && agent !== 'all') return
    loadLink(aplayercss)
    loadScript(aplayerjs, () => {
        buildPlayer(autoplay, audio, volume, lrc)
    })
}
