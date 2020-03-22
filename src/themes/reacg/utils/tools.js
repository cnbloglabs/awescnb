import { repositories } from '../constants/urls'

/**
 * @description
 * @param {Array} files [{name: '', type: 'js | css | jsCDN | cssCDN'}]
 * @param {Function} callback 回调函数 只能走一个
 */
function loadFiles(files, callback = function() {}) {
    const repositoriesUrl = repositories.package + '/assets'
    
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
                    callback()
                })
            },
            cssCDN: () => {
                $('head').append(`<link rel="stylesheet" href="${name}">`)
            },
            jsCDN: () => {
                $.getScript(name, () => {
                    callback()
                })
            },
            default: () => {
                console.error('Type error!')
            },
        }
        actions[type]()
    }
}
/**
 * @description 指定icon插入svg
 * @param {String} icon xlink:href 的值
 * @returns svg标签
 */
const iconInSvg = icon => {
    return `<svg class="icon" aria-hidden="true"><use xlink:href="${icon}"></use></svg>`
}

export { loadFiles, iconInSvg }
