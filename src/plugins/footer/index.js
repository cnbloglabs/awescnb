import './index.scss'
import { gitee } from '../../constants/message'

function footer() {
    const { links } = window.opts
    const config = links
    const nickName = $('#profile_block a:first')
        .text()
        .trim()
    const $copyright = `<div id='copyright'>
                            <span>
                                Copyright ©
                                ${new Date().getFullYear()}
                                ${nickName}
                            </span>
                            <span>
                                Powered by you
                                🍦
                                Theme in ${'awescnb'.link(gitee)} 
                            </span>
                        </div>`

    $('#footer')
        .empty()
        .append($copyright)

    if (config.length) {
        let $links = $('<ul id="links"></ul>')
        for (let { name, link } of config) {
            $links.append(`<li><a href='${link}'>${name}</a></li>`)
        }
        $('#footer').prepend($links.prop('outerHTML'))
    }
}

export default footer
