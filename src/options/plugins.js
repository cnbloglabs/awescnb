import { mergeOptions } from './helper'
import { userConfig } from './base'

export function backgroundConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        value: '',
        opacity: 0.85,
        repeat: false,
    }
    return mergeOptions(defaultOptions, userConfig.bodyBackground, devOptions)
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
    return mergeOptions(defaultOptions, userConfig.barrage, devOptions)
}

export function catalogConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        position: 'left',
    }
    return mergeOptions(defaultOptions, userConfig.catalog, devOptions)
}

export function chartConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        labels: [
            'Vue',
            'React',
            'Flutter',
            'Java',
            'NodeJs',
            'TypeScript',
            'CSS',
        ],
        datasets: [
            {
                label: 'My First Chart',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'My Second Dataset',
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)',
            },
        ],
    }
    return mergeOptions(defaultOptions, userConfig.charts, devOptions)
}

export function clickConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        colors: [],
        size: 30,
        maxCount: 10,
    }
    return mergeOptions(defaultOptions, userConfig.click, devOptions)
}

export function donationConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        qrcodes: [],
    }
    return mergeOptions(defaultOptions, userConfig.donation, devOptions)
}

export function toolsConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        initialOpen: true,
        mobileAutoClose: true,
    }
    return mergeOptions(defaultOptions, userConfig.tools, devOptions)
}

export function emojiConfig(devOptions) {
    const emojiList = [
        {
            value: '🤣',
            label: '笑哭',
        },
        {
            value: '😃',
            label: '大笑',
        },
        {
            value: '😅',
            label: '苦笑',
        },
        {
            value: '😆',
            label: '斜眼笑',
        },
        {
            value: '😏',
            label: '得意',
        },
        {
            value: '😊',
            label: '微笑',
        },
        {
            value: '😎',
            label: '酷！',
        },
        {
            value: '😍',
            label: '花痴',
        },
        {
            value: '🙂',
            label: '呵呵',
        },
        {
            value: '🤩',
            label: '好崇拜哦',
        },
        {
            value: '🤔',
            label: '思考',
        },
        {
            value: '🙄',
            label: '白眼',
        },
        {
            value: '😜',
            label: '略略略',
        },
        {
            value: '😲',
            label: '呆住',
        },
        {
            value: '😭',
            label: '大哭',
        },
        {
            value: '🤯',
            label: '头炸了',
        },
        {
            value: '😰',
            label: '冷汗',
        },
        {
            value: '😱',
            label: '吓死了',
        },
        {
            value: '🤪',
            label: '略略略',
        },
        {
            value: '😵',
            label: '晕',
        },
        {
            value: '😡',
            label: '愤怒',
        },
        {
            value: '🥳',
            label: '祝贺',
        },
        {
            value: '🤡',
            label: '小丑竟是我',
        },
        {
            value: '🤫',
            label: '嘘~',
        },
        {
            value: '🐒',
            label: '猴',
        },
        {
            value: '🤭',
            label: '笑笑不说话',
        },
        {
            value: '🐂',
            label: '牛',
        },
        {
            value: '🍺',
            label: '啤酒',
        },
        {
            value: '(=・ω・=)',
            label: '',
        },
        {
            value: '(｡･ω･｡)',
            label: '',
        },
    ]
    const defaultOptions = {
        enable: true,
        buttonIcon: '🍺',
        emojiList,
    }
    return mergeOptions(defaultOptions, userConfig.emoji, devOptions)
}

export function highlightConfig(devOptions) {
    const defaultOptions = {
        dark: 'atomOneDark',
        light: 'atomOneLight',
    }
    return mergeOptions(defaultOptions, userConfig.highLight, devOptions)
}

export function imageboxConfig(devOptions) {
    const defaultOptions = {
        enable: true,
    }
    return mergeOptions(defaultOptions, userConfig.imagebox, devOptions)
}

export function linenumbersConfig(devOptions) {
    const defaultOptions = {
        enable: true,
    }
    return mergeOptions(defaultOptions, userConfig.linenumbers, devOptions)
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
    return mergeOptions(defaultOptions, userConfig.live2d, devOptions)
}

export function lockConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        background: '',
        strings: [],
    }
    return mergeOptions(defaultOptions, userConfig.lock, devOptions)
}

export function darkModeConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        darkDefault: false,
        autoDark: false,
        autoLight: false,
    }
    return mergeOptions(defaultOptions, userConfig.darkMode, devOptions)
}

export function noticeConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        text: [],
    }
    return mergeOptions(defaultOptions, userConfig.notice, devOptions)
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
    return mergeOptions(defaultOptions, userConfig.musicPlayer, devOptions)
}

export function postBottomimageConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        img: '',
        height: '',
    }
    return mergeOptions(defaultOptions, userConfig.postBottomimage, devOptions)
}

export function postSignatureConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        enableLicense: true,
        content: [],
        licenseName: '',
        licenseLink: '',
    }
    return mergeOptions(defaultOptions, userConfig.postSignature, devOptions)
}

export function postTopimageConfig(devOptions) {
    const defaultOptions = {
        enable: true,
        fixed: false,
        imgs: [],
    }
    return mergeOptions(defaultOptions, userConfig.postTopimage, devOptions)
}

export function topProgressConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        page: 'all',
        agent: 'pc',
        background: '#FFB3CC',
        height: '5px',
    }
    return mergeOptions(defaultOptions, userConfig.topProgress, devOptions)
}

export function qrcodeConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        img: '',
        desc: '',
    }
    return mergeOptions(defaultOptions, userConfig.qrcode, devOptions)
}

export function signatureConfig(devOptions) {
    const defaultOptions = {
        enable: false,
        contents: [],
    }
    return mergeOptions(defaultOptions, userConfig.signature, devOptions)
}

export function notationConfig(devOptions) {
    const defaultOptions = {
        enable: false,
    }
    return mergeOptions(defaultOptions, userConfig.notation, devOptions)
}
