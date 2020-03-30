import urls from '../constants/urls'
import userMessage from '../constants/userMessage'

const config = window.opts.links

// 设置footer
function footer() {
    const cr = `<div id='copyright'>
                      <span>Copyright © 2019 ${userMessage.nickName}</span>
                      <span>
                        Powered by ${'VS Code 1.x'.link(
                            'https://code.visualstudio.com/',
                        )}
                        🎉
                        Theme ${'awesCnb'.link(urls.repositories.gitee)} ${2.0}
                      </span>
                  </div>`
    let links = '<div id="links"><ul>'
    for (let i = 0; i < config.length; i++) {
        links += `<li><a href='${config[i].link}'>${config[i].name}</a></li>`
        if (i === config.length - 1) {
            links += '</ul></div>'
        }
    }
    const $footer = `<footer>${links}${cr}</footer>`
    $('body').append($footer)
}

export default footer
