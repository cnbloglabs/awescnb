// 加载入口文件
const loadIndex = (files, callback = function() {}) => {
    const repositoriesUrl = urls.repositories.package
    for (let i = 0; i < files.length; i++) {
        const name = files[i].name
        const type = files[i].type
        const cssUrl = `${repositoriesUrl}/theme/${name}/${name}.css`
        const jsUrl = `${repositoriesUrl}/theme/${name}/${name}.js`
        const actions = {
            js: () => {
                $.getScript(jsUrl, () => {
                    callback()
                })
            },
            css: () => {
                $('head').append(`<link rel="stylesheet" href="${cssUrl}">`)
            },
        }
        actions[type]()
    }
}

export { loadIndex }
