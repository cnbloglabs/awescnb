import './index.scss'
import { avatar } from 'constants/cnblog'
import { isOwner } from 'utils/cnblog'
import { poll } from 'utils/helpers'
import {
    followersDetailsUrl,
    followingDetailsUrl,
    index,
    userDetails,
} from 'constants/links'
import {
    getBlogname,
    getBlogAge,
    getFollowers,
    getFollowing,
} from 'utils/cnblog'

function buildAvatar() {
    function buildAvatar() {
        $('#blog-news').prepend(`<img class='custom-avatar' src='${avatar}' />`)
    }
    poll(() => $('#profile_block>a').length, buildAvatar)
}

function hideFollowButton() {
    if (!isOwner()) return
    $('#p_b_follow').hide()
}

function buildInfo() {
    const name = getBlogname()
    const date = getBlogAge()
    const followers = getFollowers()
    const following = getFollowing()
    const el = `<div class="custom-info">
        <a class='custom-name' href="${index}">昵称：${name}</a>
        <a href="${userDetails}">园龄：${date}</a>
        <a href="${followersDetailsUrl}">粉丝：${followers}</a>
        <a href="${followingDetailsUrl}">关注：${following}</a>
    </div>`
    $('#profile_block').before(el)
}

export default () => {
    buildAvatar()
    hideFollowButton()
    poll(() => $('#profile_block>a').length, buildInfo)
}
