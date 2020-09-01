import { getBlogname } from '@cnblog'
import { isVisitor } from '@constants/cnblog'

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
    const navList = [
        {
            icon: 'fa-blog',
            title: '博客园',
            url: '',
            allowVisit: true,
        },
        {
            icon: 'fa-home',
            title: '首页',
            url: '',
            allowVisit: true,
        },
        {
            icon: 'fa-pen-square',
            title: '新随笔',
            url: '',
            allowVisit: true,
        },
        {
            icon: 'fa-envelope',
            title: '联系',
            url: '',
            allowVisit: true,
        },
        {
            icon: 'fa-rss-square',
            title: '订阅',
            url: '',
            allowVisit: true,
        },
        {
            icon: 'fa-cog',
            title: '管理',
            url: '',
            allowVisit: false,
        },
    ]

    const el = $(`
    <div id="cnblog-nav" class="side-wrapper">
        <h3>MENU</h3>
        <ul></ul>
    </div>
    `)

    for (const { icon, title, url, allowVisit } of navList) {
        const item = `<a href="${url}">
            <li>
                <span class="fas ${icon}"></span>
                <span>${title}</span>
            </li>
        </a>`

        if (isVisitor && !allowVisit) {
            continue
        }

        el.find('ul').append(item)
    }

    $('#left-side .logo').after(el)
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
