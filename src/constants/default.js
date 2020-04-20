const defaultOptions = {
    // 基本配置
    theme: {
        name: 'reacg',
        color: '#FFB3CC',
        title: '',
        avatar: '//pic.cnblogs.com/avatar/1501373/20200119190802.png',
        favicon: 'https://guangzan.gitee.io/imagehost/awescnb/favicon.png',
        headerBackground:
            'https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg',
    },
    // 个性签名
    signature: {
        enable: false,
        contents: [],
    },
    // 二维码
    qrcode: {
        enable: false,
        img: '',
        desc: '',
    },
    // 弹出公告
    notice: {
        enable: false,
        text: [],
    },
    // 首页列表图
    indexListImg: {
        enable: false,
        imgs: [],
    },
    // 随笔头图
    postTopimage: {
        enable: true,
        imgs: [],
        position: 'top',
    },
    // 评论输入框表情
    emoji: {
        enable: true,
        showRecents: true,
        recentsCount: 20,
        showPreview: true,
        showSearch: true,
    },
    // 代码高亮
    highLight: {
        type: 'atomOneDark',
    },
    // 图片灯箱
    imagebox: {
        enable: true,
    },
    // 代码行号
    lineNumbers: {
        enable: true,
    },
    // 文章目录
    catalog: {
        enable: true,
        position: 'left',
    },
    // 返回顶部按钮
    back2top: {
        enable: true,
        type: 'complex',
    },
    // live2d模型
    live2d: {
        enable: true,
        page: 'all',
        agent: 'pc',
        model: 'haru-01',
        width: 150,
        height: 200,
        position: 'right',
        gap: 'default' // 边距
    },
    // github图标
    github: {
        enable: true,
        color: '#ffb3cc',
        url: 'https://github.com/guangzan/awescnb',
    },
    // 码云图标
    gitee: {
        enable: true,
        color: '#C71D23',
        url: 'https://gitee.com/guangzan/awescnb',
    },
    // 点击特效
    click: {
        enable: true,
        auto: false,
        colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
        size: 30,
        maxCount: 50,
    },
    // 顶部加载进度条
    topProgress: {
        enable: true,
        page: 'all',
        agent: 'pc',
        background: '#FFB3CC',
        height: '5px',
    },
    // 随笔页尾部签名
    postSignature: {
        enable: false,
        content: [],
        licenseLink: '',
    },
    // 音乐播放器
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
    // 背景图片或颜色
    bodyBackground: {
        enable: false,
        type: 'img',
        value:
            'https://guangzan.gitee.io/imagehost/awescnb/images/anime/22.jpg',
        opacity: 1,
        repeat: false,
    },
    // 弹幕
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
    // 图表
    charts: {
        enable: true,
        pie: {
            title: 'My skills',
            data: {
                labels: ['JavaScript', 'css', 'Vue', 'React', 'wechat'],
                values: [40, 30, 20, 10, 20],
            },
        },
    },
    // 锁屏
    lock: {
        enable: true,
        background: '',
        strings: [
            '<i>Powered by</i> webpack.',
            '&amp; Theme in awescnb',
            '快去自定义你的个性签名吧~',
        ],
    },
    // footer链接
    links: [
        {
            name: 'awescnb',
            link: 'https://gitee.com/guangzan/awescnb',
        },
    ],
}

export default defaultOptions
