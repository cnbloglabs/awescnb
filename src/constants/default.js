/**
 * awescnb 配置
 */
const defaultOptions = {
    // 基本配置
    theme: {
        name: 'reacg',
        color: '#FFB3CC',
        title: '',
        avatar: 'https://api.uomg.com/api/rand.avatar',
        favicon: '',
        contentSize: 'mid',
        headerBackground: 'https://api.uomg.com/api/rand.avatar',
    },
    // 代码高亮
    highLight: {
        // type: 'atomOneDark',
        dark: 'atomOneDark',
        light: 'atomOneLight',
    },
    // 代码行号
    lineNumbers: {
        enable: true,
    },
    // github图标
    github: {
        enable: true,
        color: '#ffb3cc',
        url: '',
    },
    // 码云图标
    gitee: {
        enable: true,
        color: '#C71D23',
        url: '',
    },
    // 图片灯箱
    imagebox: {
        enable: false,
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
    // 右下角按钮列表
    tools: {
        enable: true,
        initialOpen: true,
        draggable: false,
    },
    // live2d模型
    live2d: {
        enable: true,
        page: 'all',
        agent: 'pc',
        model: 'haru-01',
        width: 150,
        height: 200,
        position: 'left',
        gap: 'default',
    },
    // 点击特效
    click: {
        enable: true,
        auto: false,
        colors: [],
        size: 30,
        maxCount: 15,
    },
    // 评论输入框表情
    emoji: {
        enable: true,
        showRecents: true,
        showSearch: true,
        showPreview: false,
        recentsCount: 20,
        theme: 'auto',
    },
    // 暗色模式
    darkMode: {
        enable: true,
        autoDark: true,
        autoLight: true,
    },
    // 音乐播放器
    musicPlayer: {
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
    },
    // 随笔头图
    postTopimage: {
        enable: true,
        fixed: false,
        imgs: [],
    },
    // 随笔尾图
    postBottomimage: {
        enable: false,
        img: '',
        height: '',
    },
    // 打赏
    donation: {
        enable: false,
        qrcodes: [],
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
    // 顶部加载进度条
    topProgress: {
        enable: false,
        page: 'all',
        agent: 'pc',
        background: '#FFB3CC',
        height: '5px',
    },
    indexTimeline: {
        enable: false,
    },
    // 随笔页尾部签名
    postSignature: {
        enable: true,
        content: [],
        licenseLink: '',
    },
    // 背景图片或颜色
    bodyBackground: {
        enable: false,
        value: '',
        opacity: 0.9,
        repeat: false,
    },
    // 弹幕
    barrage: {
        enable: false,
        opacity: 0.6,
        fontSize: '',
        colors: [],
        barrages: [],
        indexBarrages: [],
        postPageBarrages: [],
    },
    // 图表
    charts: {
        enable: false,
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
        enable: false,
        background: '',
        strings: [],
    },
    // footer链接
    links: [
        {
            name: '自定义链接',
            link: '',
        },
    ],
}

export default defaultOptions
