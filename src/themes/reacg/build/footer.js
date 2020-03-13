import message from '../constants/message'

const options = window.userOptions

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
						Build by <a href=${message.blog}>${message.author}</a>
						🧦
						Theme ${'awesCnb'.link(message.gitee)} ${message.version}
					</span>
				</div>`
    let $links = $('<ul id="links"></ul>')
    for (let i = 0; i < config.length; i++) {
        $links.append(
            `<li><a href='${config[i].link}'>${config[i].name}</a></li>`,
        )
    }
    const $footer = `<footer>${$links.prop('outerHTML')}${$copyright}</footer>`
    $('body').append($footer)
}

export default footer
