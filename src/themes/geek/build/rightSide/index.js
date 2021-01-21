import './index.scss'
import { getMonth, getQuarter } from '@tools'
import { index } from '@constants/links'
import { getThemeOptions } from '@config/extra'
import { getBlogname } from '@cnblog'
import { contact } from '@links'
const { avatar } = getThemeOptions()
const nickname = getBlogname()

console.log(nickname)

function flat() {
    $('#sideBar').appendTo($('#home'))
}

function buildTopBtns() {
    const noticeCount = $('#msg_count').text()
    const el = `
    <div class="account">
        <button class="account-button">
            <a href="${contact}" target="_bank">
                <li class="fas fa-envelope"></li>
            </a>
        </button>
        <button class="account-button">
            <a href="https://msg.cnblogs.com/" class='account-button-notice'>
                <li class="fas fa-bell"></li>
                <span class="notice-count" ${!noticeCount &&
                    'style=display:none'}>${noticeCount}</span>
            </a>
        </button>
        <div class="account-nickname">${nickname}</div>
        <div class="account-avatar">
            <a href="${index}"><img src="${avatar}"></a>
        </div>
    </div>`
    $('#sideBarMain').prepend(el)
}

function buildCalendar() {
    const quarter = getQuarter()
    const quarterImg = `https://guangzan.gitee.io/imagehost/Illustrations/${quarter}.svg`
    const month = getMonth()
    const instance = new Date()
    const year = instance.getFullYear()
    const date =
        instance.getDate() < 10
            ? '0' + instance.getDate()
            : instance.getDate()
    const el = `
    <div id="custom-calendar" class="sidebar-block">
        <div class="event-wrapper">
            <img src="${quarterImg}" class="event-img">
            <div class="event-title">${quarter} Wonderland</div>
            <div class="event-subtitle">${date} ${month}, ${year}</div>
            <div class="event-date">
                <div class="event-month">${month}</div>
                <div class="event-day">${date}</div>
            </div>
        </div>
    </div>
    `
    $('#sidebar_news').after($(el))
}

export default () => {
    flat()
    buildTopBtns()
    buildCalendar()
}
