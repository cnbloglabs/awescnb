const defaultOptions = {
    theme: {
        name: 'reacg',
        color: '#FFB3CC',
        qrcode: '',
        title: '',
        favicon: 'https://guangzan.gitee.io/imagehost/awescnb/favicon.png',
        avatar: '//pic.cnblogs.com/avatar/1501373/20200119190802.png',
        headerBackground:
            'https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg',
    },
    notice: {
        enable: true,
        text: ['🖼双击导航条锁屏', '🙃快去自定义通知吧'],
    },
    author: {
        isAuthor: false,
        notices: ['🙌欢迎使用awescnb'],
    },
    indexListImg: {
        enable: false,
        imgs: [],
    },
    postTopimage: {
        enable: true,
        imgs: [],
    },
    emoji: {
        enable: true,
        showRecents: true,
        recentsCount: 20,
        showPreview: true,
        showSearch: true,
    },
    highLight: {
        type: 'atomOneDark',
    },
    imagebox: {
        enable: true,
    },
    lineNumbers: {
        enable: true,
    },
    catalog: {
        enable: true,
        position: 'left',
    },
    back2top: {
        enable: true,
        type: 'complex',
    },
    live2d: {
        enable: true,
        page: 'all',
        agent: 'pc',
        model: 'haru-01',
        width: 150,
        height: 200,
        position: 'right',
    },
    github: {
        enable: true,
        color: '#ffb3cc',
        url: 'https://gitee.com/guangzan/awescnb',
    },
    gitee: {
        enable: true,
        color: '#C71D23',
        url: 'https://gitee.com/guangzan/awescnb',
    },
    click: {
        enable: true,
        auto: false,
        colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
        size: 30,
        maxCount: 50,
    },
    topProgress: {
        enable: true,
        page: 'all',
        agent: 'pc',
        background: '#FFB3CC',
        height: '5px',
    },
    postSignature: {
        enable: true,
        content: [],
        licenseLink: '',
    },
    musicPlayer: {
        enable: true,
        page: 'all',
        agent: 'pc',
        autoplay: false,
        audio: [
            {
                name: 'イニシャル',
                artist: "Poppin'Party",
                url: `https://guangzan.gitee.io/imagehost/awescnb/music/demo1.mp3`,
                cover:
                    '//p2.music.126.net/ww7gcJ_erzPa8jgZesmTOA==/109951163271403502.jpg?param=90y90',
            },
        ],
    },
    bodyBackground: {
        enable: false,
        type: 'img',
        value:
            'https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg',
        opacity: 1,
        repeat: false,
    },
    barrage: {
        enable: false,
        opacity: 0.6,
        colors: [
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
        ],
        barrages: [],
        indexBarrages: [],
        postPageBarrages: [],
    },
    charts: {
        enable: false,
    },
    lock: {
        enable: true,
        background: '',
        strings: [
            '<i>Powered by</i> webpack.',
            '&amp; Theme in awescnb',
            '快去自定义你的个性签名吧~',
        ],
    },
    links: [
        {
            name: 'awescnb',
            link: 'https://gitee.com/guangzan/awescnb',
        },
    ],
}

export default defaultOptions
