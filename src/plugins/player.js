import { pageName, userAgent } from '@/assets/utils/tools'
import APlayer from '@/assets/js/APlayer.min'
import 'aplayer/dist/aplayer.min.css'

// 音乐播放器
const setMusicPlayer = () => {
    const options = window.opts.musicPlayer
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

export default setMusicPlayer
