// 主题 js 存放的仓库
const themeRepository = 'https://guangzan.gitee.io/awescnb'
// 图片的根路径，只有tools/randomImgurl使用
const animeImages = 'https://guangzan.gitee.io/imagehost/awescnb/images/anime'
// 存放极少数体积较大的依赖
const js = 'https://guangzan.gitee.io/imagehost/awescnb/js'
//随机返回一张动漫图片
const randomImage = 'https://api.mz-moe.cn/img.php'
// 随机返回一张图片，只在开发环境使用， 快要弃用
const dummyimage = 'https://www.dummyimage.com/50'
// 随机生成一个人物头像
const randomAva = 'https://i.pravatar.cc/125?image=3'
// 看板娘模型仓库
const live2d = {
    url: 'https://cdn.jsdelivr.net/gh/github923665892/awesCnb-live2dModels',
    version: '1.7',
}
// materialize
const materialize =
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js'
// rough-viz
const viz = 'https://guangzan.gitee.io/imagehost/awescnb/js/rough-viz.js'

export {
    live2d,
    themeRepository,
    animeImages,
    js,
    randomImage,
    dummyimage,
    materialize,
    viz,
    randomAva,
}
