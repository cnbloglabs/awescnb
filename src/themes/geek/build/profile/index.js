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
    <section class="profile">
        <div class="profile-banner" style="background-image:url(${headerBackground})">
            <div class="profile-signature"></div>
        </div>
        <div class="profile-menu">
            <a>more</a>
            <a>more</a>
            <a>more</a>
            <a>more</a>
            <a>more</a>
        </div>
        <div class="profile-blur" style="background-image:url(${headerBackground})"></div>
        <div class="profile-avatar">
            <img src="${avatar}" />
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
    </section>`
    // add class active for activing tag a
    // $('.profile:before').css('background-image', `url(${headerBackground})`)
    $('#mainContent').prepend(el)
}

const profile = () => {
    build()
    follow()
}

module.exports = profile
