import urls from './constants/urls'
import icons from './constants/icons'

// 指定icon插入svg
function iconInSvg(icon) {
    return `<svg class="icon" aria-hidden="true"><use xlink:href="${icon}"></use></svg>`
}

// 鼠标移入展开移出收起
// [{rootDom: 'title', changingDom: 'menu'} ]
function mouseoverOrmouseout(elements) {
    for (let i = 0; i < elements.length; i++) {
        $(document).on('mouseover', elements[i].title, function() {
            $(elements[i].menu)
                .stop()
                .fadeIn(500)
        })
        $(document).on('mouseout', elements[i].title, function() {
            $(elements[i].menu)
                .stop()
                .fadeOut(200)
        })
    }
}

// 鼠标点击展开再次点击隐藏
// [{rootDom: 'title', changingDom: 'menu'}]
function clickToggle(elements) {
    let status = 0
    for (let i = 0; i < elements.length; i++) {
        $(document).on('click', elements[i].title, function() {
            if (status === 0) {
                $(elements[i].menu)
                    .stop()
                    .fadeIn(500)
                status = 1
            } else {
                $(elements[i].menu)
                    .stop()
                    .fadeOut(200)
                status = 0
            }
        })
    }
}

// 获取一个随机image url
function getRandomImgUrl() {
    const random = Math.floor(Math.random() * 78)
    const url = `${urls.images + random}.jpg`
    return url
}

// 加载文件
// [{name: '', type: ''}] js | css | jsCDN | cssCDN
function loadFiles(files, callback) {
    const cb = callback || function() {}
    const repositoriesUrl = urls.repositories.package + '/assets'
    for (let i = 0; i < files.length; i++) {
        const name = files[i].name
        const type = files[i].type
        const cssUrl = repositoriesUrl + '/css/' + name + '.css'
        const jsUrl = repositoriesUrl + '/js/' + name + '.min.js'
        const actions = {
            css: () => {
                $('head').append(`<link rel="stylesheet" href="${cssUrl}">`)
            },
            js: () => {
                $.getScript(jsUrl, () => {
                    cb()
                })
            },
            cssCDN: () => {
                $('head').append(`<link rel="stylesheet" href="${name}">`)
            },
            jsCDN: () => {
                $.getScript(name)
            },
            default: () => {
                console.error('Type error!')
            },
        }
        actions[type]()
    }
}

//获取一个随机food icons
function getRandomFoodicons() {
    const random = Math.floor(Math.random() * 20)
    let iconsArray = []
    Object.keys(icons.food).forEach(function(key) {
        iconsArray.push(icons.food[key])
    })
    return iconsArray[random]
}

export {
    loadFiles,
    getRandomFoodicons,
    getRandomImgUrl,
    clickToggle,
    mouseoverOrmouseout,
    iconInSvg,
}
