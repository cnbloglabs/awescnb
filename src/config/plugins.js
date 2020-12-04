import { mergeOptions } from '@tools'

export function backgroundConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        value: '',
        opacity: 0.85,
        repeat: false,
    }
    return mergeOptions(
        defaultOptions,
        window.opts.bodyBackground,
        devOptions,
    )
}

export function barrageConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        opacity: 0.6,
        fontSize: '',
        colors: [],
        barrages: [],
        indexBarrages: [],
        postPageBarrages: [],
    }
    return mergeOptions(
        defaultOptions,
        window.opts.barrage,
        devOptions,
    )
}

export function catalogConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        position: 'left',
    }
    return mergeOptions(
        defaultOptions,
        window.opts.catalog,
        devOptions,
    )
}

export function chartsConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        pie: {
            title: 'My skills',
            data: {
                labels: [
                    'JavaScript',
                    'css',
                    'Vue',
                    'React',
                    'wechat',
                ],
                values: [40, 30, 20, 10, 20],
            },
        },
    }
    return mergeOptions(
        defaultOptions,
        window.opts.charts,
        devOptions,
    )
}

export function clickConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        auto: false,
        colors: [],
        size: 30,
        maxCount: 15,
    }
    return mergeOptions(
        defaultOptions,
        window.opts.click,
        devOptions,
    )
}

export function donationConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        qrcodes: [],
    }
    return mergeOptions(
        defaultOptions,
        window.opts.donation,
        devOptions,
    )
}

export function toolsConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        initialOpen: true,
        draggable: false,
    }
    return mergeOptions(
        defaultOptions,
        window.opts.tools,
        devOptions,
    )
}

export function emojiConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        showRecents: true,
        showSearch: true,
        showPreview: false,
        recentsCount: 20,
        theme: 'auto',
    }
    return mergeOptions(
        defaultOptions,
        window.opts.emoji,
        devOptions,
    )
}

export function highlightConfig(devOptions) {
    const defaultOptions = {
        dark: 'atomOneDark',
        light: 'atomOneLight',
    }
    return mergeOptions(
        defaultOptions,
        window.opts.highLight,
        devOptions,
    )
}

export function imageboxConfig(devOptions) {
    const defaultOptions = {
        enable: true,
    }
    return mergeOptions(
        defaultOptions,
        window.opts.imagebox,
        devOptions,
    )
}

export function linenumbersConfig(devOptions) {
    const defaultOptions = {
        enable: true,
    }
    return mergeOptions(
        defaultOptions,
        window.opts.linenumbers,
        devOptions,
    )
}

export function live2dConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        page: 'all',
        agent: 'pc',
        model: 'haru-01',
        width: 150,
        height: 200,
        position: 'left',
        gap: 'default',
    }
    return mergeOptions(
        defaultOptions,
        window.opts.live2d,
        devOptions,
    )
}

export function lockConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        background: '',
        strings: [],
    }
    return mergeOptions(
        defaultOptions,
        window.opts.lock,
        devOptions,
    )
}

export function darkModeConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        autoDark: false,
        autoLight: false,
    }
    return mergeOptions(
        defaultOptions,
        window.opts.darkMode,
        devOptions,
    )
}

export function noticeConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        text: [],
    }
    return mergeOptions(
        defaultOptions,
        window.opts.notice,
        devOptions,
    )
}

export function musicPlayerConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        page: 'all',
        agent: 'pc',
        autoplay: false,
        volume: 0.4,
        lrc: {
            enable: false, // 启用歌词
            type: 1, // 1 -> 字符串歌词 3 -> url 歌词
            color: '', // 颜色
        },
        audio: [
            {
                name: '404 not found',
                artist: 'REOL',
                url:
                    'https://guangzan.gitee.io/imagehost/awescnb/music/demo4.mp3',
                cover:
                    'https://guangzan.gitee.io/imagehost/awescnb/music/demo.jpg',
                lrc: ``,
            },
        ],
    }
    return mergeOptions(
        defaultOptions,
        window.opts.musicPlayer,
        devOptions,
    )
}

export function postBottomimageConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        img: '',
        height: '',
    }
    return mergeOptions(
        defaultOptions,
        window.opts.postBottomimage,
        devOptions,
    )
}

export function postSignatureConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        enableLicense: true,
        content: [],
        licenseName: '',
        licenseLink: '',
    }
    return mergeOptions(
        defaultOptions,
        window.opts.postSignature,
        devOptions,
    )
}

export function postTopimageConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        fixed: false,
        imgs: [],
    }
    return mergeOptions(
        defaultOptions,
        window.opts.postTopimage,
        devOptions,
    )
}

export function topProgressConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        page: 'all',
        agent: 'pc',
        background: '#FFB3CC',
        height: '5px',
    }
    return mergeOptions(
        defaultOptions,
        window.opts.topProgress,
        devOptions,
    )
}

export function qrcodeConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        img: '',
        desc: '',
    }
    return mergeOptions(
        defaultOptions,
        window.opts.qrcode,
        devOptions,
    )
}

export function signatureConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        contents: [],
    }
    return mergeOptions(
        defaultOptions,
        window.opts.signature,
        devOptions,
    )
}

export function notationConfig(devOptions) {
    const defaultOptions = {
        enable: false,
    }
    return mergeOptions(
        defaultOptions,
        window.opts.notation,
        devOptions,
    )
}
