import { getBlogname } from '@cnblog'
import './index.scss'

const buildLeftside = () => {
    const el = `
    <div id='left-side'>
        <div class='logo'><a href="https://www.cnblogs.com/">CNBLOG</a></div>
        <div class="side-wrapper">
            <h3>FAVOURITE</h3>
            <ul></ul>
        </div>
    </div>`

    $('#home').append(el)
}

const buildCustomLinksToLeftSide = () => {
    const links = window.opts.links
    for (const { name, link } of links) {
        $('#left-side').find('ul').append(`
            <li><a href="${link}">${name}</a></li>
        `)
    }
}

const removeHeaderToLeftside = () => {
    const el = $('<div id="cnblog-nav" class="side-wrapper">').append(
        '<h3>MENU</h3>',
    )
    $('#left-side .logo').after(el)
    $('#navList').appendTo($('#cnblog-nav'))
}

const buildLeftsideBottomBtns = () => {
    const { avatar } = window.opts.theme
    const github = window.opts.github
    const userName = getBlogname()
    const el = `
    <div class="leftside-bottom">
    <a href="${github.url}" class="follow-me" target="_blank">
        <span class="follow-text"><i class="fas fa-github"></i>Fork me on GitHub</span>
        <span class="developer">
            <img src="${avatar}">
            ${userName}
        </span>
    </a>
    </div>`
    $('#left-side').append(el)
}

const leftSide = () => {
    buildLeftside()
    buildCustomLinksToLeftSide()
    removeHeaderToLeftside()
    buildLeftsideBottomBtns()
}

module.exports = leftSide
