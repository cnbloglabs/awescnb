import './index.scss'
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
    // unfollow,
} from 'utils/cnblog'

function createContainer() {
    return $('<div>').addClass('profile')
}

function createSignature() {
    return $('<div>').addClass('profile-signature')
}

function createBackground() {
    const { headerBackground } = getThemeOptions()
    const signatureWrap = createSignature()
    return $('<div>')
        .addClass('profile-banner')
        .css('backgroundImage', `url(${headerBackground})`)
        .append(signatureWrap)
}

function createMenu() {
    const el = $('<div>').addClass('profile-menu')
    const menuItem = [
        {
            title: '收藏',
            url: appWz,
        },
        {
            title: '闪存',
            url: appIng,
        },
        {
            title: '小组',
            url: appGroup,
        },
        {
            title: '博问',
            url: appQ,
        },
    ]

    menuItem.forEach(item => {
        const menuItem = $('<a>')
            .attr('target', '_blank')
            .attr('href', item.url)
            .text(item.title)

        el.append(menuItem)
    })

    return el
}

function createBlur() {
    const { headerBackground } = getThemeOptions()
    return $('<div>')
        .addClass('profile-blur')
        .css('backgroundImage', `url(${headerBackground})`)
}

function createAvatar() {
    return $('<div>')
        .addClass('profile-avatar')
        .append(`<a href="${index}"><img src="${avatar}" /></a>`)
}

function createMessageElements() {
    return $('<div>')
        .addClass('profile-msg')
        .append(
            $('<p>')
                .append(
                    $('<a>')
                        .addClass('profile-nickname')
                        .attr('href', index),
                )
                .append(
                    $('<button>')
                        .addClass('profile-followstate')
                        .attr('href', index)
                        .text('关注'),
                ),
        )
        .append(
            $('<p>')
                .append(
                    $('<span>')
                        .addClass('profile-age')
                        .text('园龄：'),
                )
                .append(
                    $('<a>')
                        .addClass('profile-followers')
                        .attr('href', followersDetailsUrl)
                        .text('粉丝：'),
                )
                .append(
                    $('<a>')
                        .addClass('profile-following')
                        .attr('href', followingDetailsUrl)
                        .text('关注：'),
                ),
        )
}

function followAndUnfollow() {
    $('.profile-msg button').click(function() {
        if (isOwner()) {
            return
        }
        const followButton = $('.profile-followstate')
        if (followButton.text() === '关注') {
            follow()
            followButton.text('已关注')
        }
        // else {
        //     unfollow()
        //     followButton.text('关注')
        // }
    })
}

function insertMessage() {
    const followState = getFollowState()
    const userName = getBlogname()
    const age = getBlogAge()
    const followers = getFollowers()
    const following = getFollowing()

    $('.profile-nickname').text(userName)
    $('.profile-age').append(age)
    $('.profile-followers').append(followers)
    $('.profile-following').append(following)
    $('.profile-followstate').text(followState ? '已关注' : '关注')
}

export default () => {
    const container = createContainer()
    const background = createBackground()
    const menu = createMenu()
    const blur = createBlur()
    const avatar = createAvatar()
    const messageWrap = createMessageElements()

    container
        .append(background)
        .append(menu)
        .append(blur)
        .append(avatar)
        .append(messageWrap)

    $('#mainContent').prepend(container)

    followAndUnfollow()
    poll(() => $('#home #profile_block>a').length, insertMessage)
}
