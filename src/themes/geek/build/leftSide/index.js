import { getBlogname } from '@cnblog'
import './index.scss'

const buildLeftside = () => {
    const el = `
    <div id='left-side'>
        <div class='logo'>
            <a href="https://www.cnblogs.com/">CNBLOG</a>
        </div>
        <div class="favourite side-wrapper">
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
            <li><a href="${link}" target="_blank">${name}</a></li>
        `)
    }
}

const removeHeaderToLeftside = () => {
    const el = $('<div id="cnblog-nav" class="side-wrapper">').append(
        '<h3>MENU</h3>',
    )
    $('#left-side .logo').after(el)

    const icons = {
        博客园: 'fa-blog',
        首页: 'fa-home',
        新随笔: 'fa-pen-square',
        联系: 'fa-envelope',
        订阅: 'fa-rss-square',
        管理: 'fa-cog',
    }
    $('#navList li').each(function() {
        const title = $(this)
            .text()
            .trim()
        $(this).prepend(`<span class="fas ${icons[title]}"></span>`)
    })
    $('#navList').appendTo($('#cnblog-nav'))
}

const buildLeftsideBottomBtns = () => {
    const { avatar } = window.opts.theme
    const github = window.opts.github
    const userName = getBlogname()
    const el = `
    <div class="leftside-bottom">
    <a href="${github.url}" class="follow-me" target="_blank">
        <span class="follow-text"><i class="fas fa-github"></i><span>Fork me on GitHub</span></span>
        <span class="developer">
            <img src="${avatar}">
            <span>${userName}</span>
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
