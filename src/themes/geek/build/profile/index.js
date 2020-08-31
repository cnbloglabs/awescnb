import toast from '@plugins/toast'
import { isVisitor } from '@cnblog'
import { followersDetailsUrl, followingDetailsUrl, index } from '@links'
import {
    getFollowState,
    getBlogname,
    getBlogAge,
    getFollowers,
    getFollowing,
} from '@cnblog'
import './index.scss'

let followState = getFollowState()

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
            <a href="${index}"><img src="${avatar}" /></a>
        </div>
        <div class="profile-msg">
            <p>
                <a href="${index}"><span>${userName}</span></a>
                <button class="followState">${
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

const follow = () => {
    $('.profile-msg button').click(function() {
        if (isVisitor) {
            toast('不可关注自己哦', 'error')
            return
        }
        const content = followState ? '取消关注成功' : '感谢关注'
        $('.followState').text(followState ? '关注' : '取消关注')
        toast(content)
        window.follow()
    })
}

const profile = () => {
    build()
    follow()
}

module.exports = profile
