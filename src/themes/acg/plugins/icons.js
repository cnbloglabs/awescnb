import { iconInSvg } from '../tools'
import urls from '../constants/urls'
import icons from '../constants/icons'

const options = window.opts.github

// 设置github
function github() {
    if (!options.enable) return
    const $githubIcon = `<a id="custom-github" href=${options.url}>${iconInSvg(icons.github)}</a>`
    $('#navigator').prepend($githubIcon)
    $('#navigator .icon').css('color', `${options.color}`)
}

// 调用
function build() {
    github()
}

// 加载i confont js
function setIcons() {
    $.getScript(urls.script.icon, build)
}

export default setIcons
