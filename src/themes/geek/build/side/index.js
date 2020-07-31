import './index.scss'
import { getMonth, getQuarter } from '@tools'
import { getBlogname } from '@cnblog'

const flat = () => {
    $('#sideBar').appendTo($('#home'))
}

const buildTopBtns = () => {
    const { avatar } = window.opts.theme
    const el = `
    <div class="account">
        <button class="account-button">
            <li class="fas fa-envelope"></li>
        </button>
        <button class="account-button">
            <a href="https://msg.cnblogs.com/"><li class="fas fa-bell"></li></a>
        </button>
        <span class="account-user">${getBlogname()}
            <img src="${avatar}" alt="" class="account-profile">
            <span>▼</span>
        </span>
    </div>`
    $('#sideBarMain').prepend(el)
}

const buildCalendar = () => {
    $('#sidebar_news').before($('#blog-calendar'))
    const background =
        'https://tva4.sinaimg.cn/large/87c01ec7gy1fsnqqjlmezj21kw0w07ix.jpg'
    const month = getMonth()
    const instance = new Date()
    const year = instance.getFullYear()
    const date =
        instance.getDate() < 10 ? '0' + instance.getDate() : instance.getDate()

    const el = `
    <div class="event-wrapper">
        <img src="${background}" class="event-img">
        <div class="event-date">
            <div class="event-month">${month}</div>
            <div class="event-day">${date}</div>
        </div>
        <div class="event-title">${getQuarter()} Wonderland</div>
        <div class="event-subtitle">${date} ${month}, ${year}</div>
    </div>
    `
    $('#blog-calendar').prepend(el)
}

const side = () => {
    flat()
    buildTopBtns()
    buildCalendar()
}

module.exports = side
