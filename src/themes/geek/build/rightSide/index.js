import { getMonth, getQuarter } from '@tools'
import { index } from '@constants/links'
import { getBlogname } from '@cnblog'
import './index.scss'

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
            <a href="${index}"><img src="${avatar}" alt="" class="account-profile"></a>
            <span>▼</span>
        </span>
    </div>`
    $('#sideBarMain').prepend(el)
}

const buildCalendar = () => {
    const quarterImgs = {
        Spring: ' https://guangzan.gitee.io/imagehost/Illustrations/spring.svg',
        Summer: ' https://guangzan.gitee.io/imagehost/Illustrations/summer.svg',
        Autumn: ' https://guangzan.gitee.io/imagehost/Illustrations/autumn.svg',
        Windter:
            ' https://guangzan.gitee.io/imagehost/Illustrations/winter.svg',
    }
    //  https://api.ixiaowai.cn/mcapi/mcapi.php
    // const background =
    //     'https://tva1.sinaimg.cn/large/0060lm7Tly1ftg6wuhgywj31hc0u0wjr.jpg'
    // 'https://tva4.sinaimg.cn/large/87c01ec7gy1fsnqqjlmezj21kw0w07ix.jpg'

    const quarter = getQuarter()
    const quarterImg = quarterImgs[quarter]
    const month = getMonth()
    const instance = new Date()
    const year = instance.getFullYear()
    const date =
        instance.getDate() < 10 ? '0' + instance.getDate() : instance.getDate()

    const el = `
    <section id="custom-calendar" class="sidebar-block">
        <div class="event-wrapper">
            <img src="${quarterImg}" class="event-img">
            <div class="event-title">${quarter} Wonderland</div>
            <div class="event-subtitle">${date} ${month}, ${year}</div>
            <div class="event-date">
                <div class="event-month">${month}</div>
                <div class="event-day">${date}</div>
            </div>
        </div>
    </section>
    `
    $('#blog-calendar')
        .after($(el))
        .hide()
}

const side = () => {
    flat()
    buildTopBtns()
    buildCalendar()
}

export default side
