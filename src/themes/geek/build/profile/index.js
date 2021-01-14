import toast from '@plugins/toast'
import { isOwner } from '@constants/cnblog'
import { appWz, appQ, appGroup, appIng } from '@links'
import {
    followersDetailsUrl,
    followingDetailsUrl,
    index,
} from '@links'
import { getThemeOptions } from '@config/extra'
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

const { avatar, headerBackground } = getThemeOptions()
const followState = getFollowState()
const userName = getBlogname()
const age = getBlogAge()
const fans = getFollowers()
const focus = getFollowing()

const build = () => {
    const el = `
    <section class="profile">
        <div class="profile-banner" style="background-image:url(${headerBackground})">
            <div class="profile-signature"></div>
        </div>
        <div class="profile-menu">
            <a target="_blank" href="${appWz}">收藏</a>
            <a target="_blank" href="${appIng}">闪存</a>
            <a target="_blank" href="${appGroup}">小组</a>
            <a target="_blank" href="${appQ}">博问</a>
        </div>
        <div class="profile-blur" style="background-image:url(${headerBackground})"></div>
        <div class="profile-avatar">
            <a href="${index}"><img src="${avatar}" /></a>
        </div>
        <div class="profile-msg">
            <p>
                <a href="${index}"><span>${userName}</span></a>
                <button class="followState${
                    isOwner ? ' disabled' : ''
                }">${
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
        const isUnfollowed =
            $('.followState').text() === '关注'
        if (isUnfollowed) {
            toast('感谢关注')
            $('.followState').text('取消关注')
            follow()
        } else {
            toast('取消关注成功')
            $('.followState').text('关注')
            unfollow()
        }
    })
}

// const buildMeteor = () => {
//     const el = `
//     <div class="night">
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//         <div class="shooting_star"></div>
//     </div>
//     `
//     $('.profile-banner').append(el)
// }

const profile = () => {
    build()
    followAndUnfollow()
    // buildMeteor()
}

export default profile
