import toast from '@plugins/toast'
import { getFollowState, getBlogname } from '@cnblog'
import './index.scss'

const follow = () => {
    $('.profile-msg button').click(function() {
        toast('感谢关注')
        window.follow()
    })
}

const build = () => {
    const { avatar } = window.opts.theme
    const { headerBackground } = window.opts.theme
    const userName = getBlogname()
    const el = `
    <div class="profile">
        <div class="profile-signature"></div>
        <div class="profile-avatar">
            <img src="${avatar}" alt="" class="profile-img">
            <div class="profile-msg">
                <p>
                    <span>${userName}</span>
                    <button>${getFollowState() ? '取消关注' : '关注'}</button>
                </p>
                <p>
                    <span>园龄：${'11个月'}</span>
                    <span>粉丝：${100}</span>
                    <span>关注：${10}</span>
            </div>
        </div>
        <img src="${headerBackground}" class="profile-cover">
        <div class="profile-menu">
            <a class="profile-menu-link active">More</a>
            <a class="profile-menu-link">More</a>
            <a class="profile-menu-link">More</a>
            <a class="profile-menu-link">More</a>
            <a class="profile-menu-link">More</a>
        </div>
    </div>`
    // $('.profile:before').css('background-image', `url(${headerBackground})`)
    $('#mainContent').prepend(el)
}

const profile = () => {
    build()
    follow()
}

module.exports = profile
