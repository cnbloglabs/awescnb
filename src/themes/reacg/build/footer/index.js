import './index.scss'
import { gitee, version } from '../../constants/message'

function footer() {
    const { links } = window.opts
    const nickName = $('#profile_block a:first')
        .text()
        .trim()
    const config = links
    const $copyright = `<div id='copyright'>
					<span>
						Copyright ©
						${new Date().getFullYear()}
						${nickName}
					</span>
					<span>
						Powered by you
						🧦
						Theme in ${'awescnb'.link(gitee)} ${version}
					</span>
				</div>`
    let $links = $('<ul id="links"></ul>')
    for (let i = 0; i < config.length; i++) {
        $links.append(
            `<li><a href='${config[i].link}'>${config[i].name}</a></li>`,
        )
    }
    $('#footer')
        .empty()
        .append(`${$links.prop('outerHTML')}${$copyright}`)
}

export default footer
