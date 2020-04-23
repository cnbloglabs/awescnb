// 音乐播放器
// 引入即可

import { pageName, userAgent, cacheScript } from '@/assets/utils/tools'
import { aplayerjs } from '@constants/urls'
import 'aplayer/dist/aplayer.min.css'
import './index.css'

const { enable, autoplay, audio, page, agent } = window.opts.musicPlayer

// 音乐播放器
function build() {
    $('body').append('<div id="player" class="aplayer music-APlayer"></div>')

    const ap = new APlayer({
        container: document.getElementById('player'),
        fixed: true,
        preload: 'auto',
        autoplay,
        audio,
        volume: 0.4,
    })

    window.onbeforeunload = () => {
        const audioTime = ap.audio.currentTime
        localStorage.audioTime = audioTime
    }
    window.onload = () => {
        ap.seek(localStorage.audioTime ? Number(localStorage.audioTime) : 0)
    }
}

function setMusicPlayer() {
    if (!enable) return
    if (page !== pageName() && page !== 'all') return
    if (agent !== userAgent() && agent !== 'all') return
    cacheScript(aplayerjs, build)
}

export default setMusicPlayer
