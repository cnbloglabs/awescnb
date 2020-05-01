import userMessage from '../constants/userMessage'
import headerElements from '../constants/headerElements'
import { mouseoverOrmouseout } from '../tools'
import { pageName, userAgent } from '@tools'

function user() {
    const el = ` 
                        <li id='user-msg'>
                            <a>${
        userMessage.nickName
    }</a>
                            <ul>
                                <li>园龄：${$(
                                    '#profile_block a:nth-child(3)',
                                ).prop('outerHTML')}</li>
                                <li>粉丝：${$(
                                    '#profile_block a:nth-child(5)',
                                ).prop('outerHTML')}</li>
                                <li>关注：${$(
                                    '#profile_block a:nth-child(7)',
                                ).prop('outerHTML')}</li>
                            </ul>
                        </li>`
    $('#navList').before(el)
}

function sidebar() {
    const el = $('#blog-sidecolumn').prop('outerHTML')
    $('#navList').after(el)
}

// 设置头部背景图
function background() {
    const option = window.opts.theme.headerBackground
    if (option === '') return
    $('#blogTitle').css('background-image', `url(${option})`)
}

// post title
function title() {
    if (pageName() !== 'post') return
    // 随笔题目
    $('#blogTitle').html(`<h1>${$('#cb_post_title_url').text()}</h1>`)
}

// hover
function hover() {
    if (userAgent() !== 'pc') return
    mouseoverOrmouseout(headerElements)
}

function nav() {
    user()
    sidebar()
    hover()
    title()
    background()
}

export default nav
