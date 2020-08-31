import toast from '@plugins/toast'
import { isOwner } from '@constants/cnblog'
import { followersDetailsUrl, followingDetailsUrl, index } from '@links'
import {
    getFollowState,
    getBlogname,
    getBlogAge,
    getFollowers,
    getFollowing,
    follow,
    unfollow,
} from '@cnblog'
import './index.scss'

const followState = getFollowState()
const userName = getBlogname()
const age = getBlogAge()
const fans = getFollowers()
const focus = getFollowing()

const build = () => {
    const { avatar } = window.opts.theme
    const { headerBackground } = window.opts.theme

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
            <a href="${index}"><img src="${avatar}" /></a>
        </div>
        <div class="profile-msg">
            <p>
                <a href="${index}"><span>${userName}</span></a>
                <button class="followState${isOwner ? ' disabled' : ''}">${
        followState ? '取消关注' : '关注'
    }</button>
            </p>
            <p>
                <span>园龄：${age}</span>
                <span><a href="${followersDetailsUrl}">粉丝：${fans}</a></span>
                <span><a href="${followingDetailsUrl}">关注：${focus}</a></span>
            </p>
        </div>
    </section>`
    $('#mainContent').prepend(el)
}

const followAndUnfollow = () => {
    $('.profile-msg button').click(function() {
        if (isOwner) {
            toast('无法关注自己', 'error')
            return
        }
        const isUnfollowed = $('.followState').text() === '关注'
        if (isUnfollowed) {
            toast('感谢关注')
            follow()
            $('.followState').text('取消关注')
        } else {
            toast('取消关注成功')
            unfollow()
            $('.followState').text('关注')
        }
    })
}

const profile = () => {
    build()
    followAndUnfollow()
}

module.exports = profile
