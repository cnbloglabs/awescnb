const { currentBlogApp } = window

/**
 * 工具函数
 * 是否开启公告
 * @returns {Boolean}
 */
const openNews = () => !!$('#profile_block').length

/**
 * 获取博客园昵称
 */
const getBlogname = () => {
    if (openNews()) return $('#profile_block>a:nth-of-type(1)').html()
    const headerTitle = $('#Header1_HeaderTitle').text()
    if (headerTitle.length) return headerTitle
    return currentBlogApp
}

/**
 * 获取粉丝数
 */
const getFollowers = () => {
    const count = openNews()
        ? $('#profile_block a:nth-of-type(3)')
              .text()
              .trim()
        : '未知'
    return count
}

/**
 * 获取关注的人数
 */
const getFollowing = () => {
    const count = openNews()
        ? $('#profile_block a:nth-of-type(4)')
              .text()
              .trim()
        : '未知'
    return count
}

/**
 * 是否已经关注
 */
const getFollowState = () => {
    return (
        $('#p_b_follow')
            .text()
            .trim() === '-取消关注'
    )
}

/**
 * 获取园龄
 */
const getBlogAge = () => {
    const age = openNews()
        ? $('#profile_block a:nth-of-type(2)')
              .text()
              .trim()
        : '未知'
    return age
}

/**
 * 获取当前随笔链接
 */
const getCurrentPostUrl = () => {
    return location.href.indexOf('#') === -1
        ? location.href
        : location.href.substring(0, location.href.lastIndexOf('#'))
}

/**
 * get blog user guid
 */
const getBlogUserGuid = () => {
    const strValue = $('body>script:last').text()
    const regex = /'([^"]*)'/g
    return regex.exec(strValue)[1]
}

/**
 * follow
 */
const follow = () => {
    window.follow(getBlogUserGuid())
}

/**
 * unfollow
 */
const unfollow = () => {
    window.unfollow(getBlogUserGuid())
}

export {
    getBlogname,
    getFollowers,
    getFollowing,
    getFollowState,
    getBlogAge,
    getCurrentPostUrl,
    getBlogUserGuid,
    follow,
    unfollow,
}
