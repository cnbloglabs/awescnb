import {gitee, version } from '../constants/message'

const options = window.opts

// 设置footer
function footer() {
    const nickName = $('#profile_block a:first')
        .text()
        .trim()
    const config = options.links
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
    const $footer = `<footer>${$links.prop('outerHTML')}${$copyright}</footer>`
    $('#home').append($footer)
}

export default footer
