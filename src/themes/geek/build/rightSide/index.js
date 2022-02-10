import './index.scss'
import { getMonth, getQuarter } from 'utils/helpers'
// import { getBlogname } from 'utils/cnblog'
import { contact, message, index } from 'constants/links'
import { avatar } from 'constants/cnblog'
import {
    getViewCount,
    getPostCount,
    getArticleCount,
    getCommentCount,
} from 'utils/cnblog'

function flat() {
    $('#sideBar').appendTo($('#home'))
}

function buildTopBtns() {
    const noticeCount = $('#msg_count').text()
    const el = `
    <div class="account">
        <div class="account-button email">
            <a href="${contact}" target="_bank">
                <li class="fas fa-envelope"></li>
            </a>
        </div>
        <div class="account-button message">
            <a href="${message}" class='account-button-notice'>
                <li class="fas fa-bell"></li>
                <span class="notice-count" ${!noticeCount &&
                    'style=display:none'}>${noticeCount}</span>
            </a>
        </div>
        <div class="account-button stats">
            <div class="account-button-stats">
                <li class="fas fa-chart-bar"></li>
            </div>
            <ul class="stat-list">
                <li>随笔：<span>${getPostCount()}</span></li>
                <li>文章：<span>${getArticleCount()}</span></li>
                <li>评论：<span>${getCommentCount()}</span></li>
                <li>阅读：<span>${getViewCount()}</span></li>
            </ul>
        </div>
        <div class="account-avatar">
            <a href="${index}"><img src="${avatar}"></a>
        </div>
    </div>`
    $('#sideBarMain').prepend(el)
}

function buildCalendar() {
    const quarter = getQuarter()
    const quarterImg = `https://guangzan.gitee.io/imagehost/Illustrations/${quarter.toLowerCase()}.png`
    const month = getMonth()
    const instance = new Date()
    const year = instance.getFullYear()
    const date =
        instance.getDate() < 10 ? '0' + instance.getDate() : instance.getDate()
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
    $('#leftcontentcontainer').before($(el))
}

export default () => {
    flat()
    buildTopBtns()
    buildCalendar()
}
