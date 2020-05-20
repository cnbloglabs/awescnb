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
        contentSize: 'mid',
    },
    // 暗色模式
    darkMode: {
        enable: true, // 是否启用
        autoDark: false, // 夜间自动切换暗色模式
        autoLight: false, // 日间自动切换亮色模式
    },
    // 个性签名
    signature: {
        enable: false,
        contents: [],
    },
    // 二维码
    qrcode: {
        enable: false,
        img: 'https://gitee.com/guangzan/imagehost/raw/master/markdown/dd5e06a44e92687b3945f412adea1901.png',
        desc: '🤼‍♂️ 扫码加入 awescnb皮肤 qq交流群，有问必答！',
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
        fixed: false,
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
        inDarkMode: 'atomOneDark',
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
        gap: 'default', // 边距
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
        enable: false,
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
        volume: 0.4,
        lrc: {
            enable: true, // 启用歌词
            type: 1, // 1 字符串 3 url
            color: '', // 颜色
        },
        audio: [
            {
                name: '404 not found',
                artist: 'REOL',
                url:
                    'http://music.163.com/song/media/outer/url?id=436016480.mp3',
                cover:
                    'http://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg?param=300x300',
                lrc:
                    "[ti:404 not found][ar:REOL][al:Σ][by:菜籽酱][00:00.000] 作曲 : Reol[00:00.008] 作词 : Reol[00:00.25][00:01.69]fade away...do over again...[00:13.35][00:13.76]歌い始めの一文字目 いつも迷ってる[00:18.57]どうせとりとめのないことだけど[00:22.85]伝わらなきゃもっと意味がない[00:26.84][00:27.38]どうしたってこんなに複雑なのに[00:30.75]噛み砕いてやらなきゃ伝わらない[00:34.18]ほら結局歌詞なんかどうだっていい[00:37.64]僕の音楽なんかこの世になくたっていいんだよ[00:41.32][00:54.74]Everybody don't know why.[00:58.20]Everybody don't know much.[01:01.56]僕は気にしない 君は気付かない[01:04.99]何処にももういないいない[01:08.17][01:08.59]Everybody don't know why.[01:11.86]Everybody don't know much.[01:15.25]忘れていく 忘れられていく[01:18.61]We don't know,We don't know.[01:22.86][01:39.61]目の前 広がる現実世界がまた歪んだ[01:46.30]何度リセットしても[01:47.57]僕は僕以外の誰かには生まれ変われない[01:51.88]「そんなの知ってるよ」[01:53.41]気になるあの子の噂話も[01:56.52]シニカル標的は次の速報[01:59.75][02:00.22]麻痺しちゃってるこっからエスケープ[02:03.57]遠く遠くまで行けるよ[02:06.71][02:07.15]安定なんてない 不安定な世界[02:14.04]安定なんてない きっと明日には忘れるよ[02:20.52][02:22.35]fade away...do over again...[02:33.62][02:34.41]そうだ世界はどこかがいつも嘘くさい[02:37.51]綺麗事だけじゃ大事な人たちすら守れない[02:41.06]くだらない 僕らみんなどこか狂ってるみたい[02:44.48]本当のことなんか全部神様も知らない[02:48.56][03:03.39]Everybody don't know why.[03:06.80]Everybody don't know much.[03:10.17]僕は気にしない 君は気付かない[03:13.62]何処にももういないいない[03:17.02][03:17.46]Everybody don't know why.[03:20.49]Everybody don't know much.[03:23.88]忘れていく 忘れられていく[03:27.18]We don't know,We don't know.[03:29.83]",
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
