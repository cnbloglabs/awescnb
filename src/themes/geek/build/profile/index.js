import './index.scss'
import toast from 'plugins/toast'
import { isOwner } from 'utils/cnblog'
import { poll } from 'utils/helpers'
import { appWz, appQ, appGroup, appIng } from 'constants/links'
import { getThemeOptions } from 'options/extra'
import { avatar } from 'constants/cnblog'
import {
    followersDetailsUrl,
    followingDetailsUrl,
    index,
} from 'constants/links'
import {
    getFollowState,
    getBlogname,
    getBlogAge,
    getFollowers,
    getFollowing,
    follow,
    unfollow,
} from 'utils/cnblog'

function createElements() {
    const followState = getFollowState()
    const userName = getBlogname()
    const age = getBlogAge()
    const fans = getFollowers()
    const focus = getFollowing()

    const { headerBackground } = getThemeOptions()
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
                <button class="followState${isOwner() ? ' disabled' : ''}">${
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

function followAndUnfollow() {
    $('.profile-msg button').click(function() {
        if (isOwner()) {
            return false
        }
        const isUnfollowed = $('.followState').text() === '关注'
        if (isUnfollowed) {
            toast('关注成功')
            $('.followState').text('取消关注')
            follow()
        } else {
            toast('取消关注')
            $('.followState').text('关注')
            unfollow()
        }
    })
}

function buildProfile() {
    createElements()
    followAndUnfollow()
}

export default () => {
    poll($('#profile_block a:nth-of-type(2)').length, buildProfile)
}
