const defaultOptions = {
    theme: {
        name: 'reacg',
        color: '#FFB3CC',
        qrcode: '',
        title: 'awescnb2.0',
        favicon: 'https://guangzan.gitee.io/awescnb/assets/images/favicon.png',
        avatar: '//pic.cnblogs.com/avatar/1501373/20200119190802.png',
        headerBackground:
            'https://guangzan.gitee.io/awescnb/assets/images/acg/22.jpg',
    },
    highLight: {
        type: 'atomOneDark',
    },
    charts: {
        enable: false,
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
    bodyBackground: {
        enable: false,
        type: 'color',
        value: '#FDE6E0',
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
    click: {
        enable: true,
        page: 'all',
        agent: 'pc',
        auto: false,
        colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
    },
    musicPlayer: {
        enable: true,
        page: 'all',
        agent: 'pc',
        autoplay: false,
        audio: [
            {
                name: 'イニシャル',
                artist: 'Poppin\'Party',
                url: `https://guangzan.gitee.io/imagehost/awescnb/music/demo1.mp3`,
                cover:
                    '//p2.music.126.net/ww7gcJ_erzPa8jgZesmTOA==/109951163271403502.jpg?param=90y90',
            },
        ],
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
        content: [
            "<p>版权声明：本博客所有文章除特别声明外均为原创，采用 <a href=''>CC BY-NC-SA 4.0</a> 许可协议。转载请在文章开头明显位置注明原文链接和作者等相关信息，明确指出修改（如有），并通过 E-mail 等方式告知，谢谢合作！</p>",
        ],
    },
    links: [
        {
            name: 'awesCnb',
            link: 'https://gitee.com/guangzan/awescnb',
        },
    ],
}

export default defaultOptions
