import toast from '@plugins/toast'
import { followersDetailsUrl, followingDetailsUrl } from '@links'
import {
    getFollowState,
    getBlogname,
    getBlogAge,
    getFollowers,
    getFollowing,
} from '@cnblog'
import './index.scss'

const follow = () => {
    $('.profile-msg button').click(function() {
        // $('.profile-msg p button').text('已关注')
        toast('感谢关注')
        window.follow()
    })
}

const build = () => {
    const { avatar } = window.opts.theme
    const { headerBackground } = window.opts.theme
    const userName = getBlogname()
    const age = getBlogAge()
    const fans = getFollowers()
    const focus = getFollowing()
    const el = `
    <div class="profile">
        <div class="profile-signature"></div>
        <div class="profile-avatar">
            <img src="${avatar}" alt="" class="profile-img">
        </div>
        <div class="profile-msg">
            <p>
                <span>${userName}</span>
                <button>${getFollowState() ? '取消关注' : '关注'}</button>
            </p>
            <p>
                <span>园龄：${age}</span>
                <span><a href="${followersDetailsUrl}">粉丝：${fans}</a></span>
                <span><a href="${followingDetailsUrl}">关注：${focus}</a></span>
            </p>
        </div>
        <img src="${headerBackground}" class="profile-cover">
        <div class="profile-menu">
            <a>more</a>
            <a>more</a>
            <a>more</a>
            <a>more</a>
            <a>more</a>
        </div>
    </div>`
    // add class active for activing tag a
    // $('.profile:before').css('background-image', `url(${headerBackground})`)
    $('#mainContent').prepend(el)
}

const profile = () => {
    build()
    follow()
}

module.exports = profile
