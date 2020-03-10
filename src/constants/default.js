const defaultOptions = {
    theme: {
        name: 'reacg',
        color: '#FFB3CC',
        qrcode: '',
        title: 'awescnb2.0',
        favicon: '', //'https://guangzan.gitee.io/awescnb/assets/images/favicon.png',
        avatar: '//pic.cnblogs.com/avatar/1501373/20200119190802.png',
        headerBackground: 'https://guangzan.gitee.io/awescnb/assets/images/acg/22.jpg',
    },
    bodyBackground: {
        enable: false,
        type: 'color',
        value: 'rgb(253, 230, 224)',
        opacity: 1,
        repeat: false,
    },
    imagebox: {
        enable: true,
    },
    barrage: {
        enable: true,
        opacity: 0.5,
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
    back2top: {
        enable: true,
    },
    live2d: {
        enable: false,
        page: 'all',
        agent: 'pc',
        model: 'random',
        width: 150,
        height: 200,
        position: 'right',
    },
    github: {
        enable: true,
        color: '#ffb3cc',
        url: 'https://gitee.com/guangzan/awescnb',
    },
    click: {
        enable: false,
        page: 'all',
        agent: 'pc',
        auto: false,
        colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
    },
    lineNumbers: {
        enable: true,
    },
    catalog: {
        enable: true,
        position: 'left',
    },
    musicPlayer: {
        enable: false,
        page: 'all',
        agent: 'pc',
        autoplay: false,
        audio: [
            {
                name: '红色高跟鞋',
                artist: '李瑨瑶',
                url: `https://guangzan.gitee.io/awescnb/assets/music/红色高跟鞋.mp3`,
                cover:
                    '//p2.music.126.net/ww7gcJ_erzPa8jgZesmTOA==/109951163271403502.jpg?param=90y90',
            },
        ],
    },
    topProgress: {
        enable: false,
        page: 'all',
        agent: 'pc',
        background: '#FFB3CC',
        height: '5px',
    },
    postSignature: {
        enable: true,
        content: ['转载请附上原文链接，谢谢！'],
    },
    highLight: {
        type: 'atomOneDark',
    },
    links: [
        {
            name: 'awesCnb',
            link: 'https://gitee.com/guangzan/awescnb',
        },
    ],
}

export default defaultOptions
