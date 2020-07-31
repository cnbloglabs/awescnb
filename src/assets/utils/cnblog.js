const { login, logout, register, currentBlogApp } = window
export { login, logout, register }

/**
 * 工具函数
 * 是否开启公告
 */
const openNews = () => {
    return !!$('#profile_block').length
}

/**
 * 获取博客园昵称
 */
export const getBlogname = () => {
    const headerTitle = $('#Header1_HeaderTitle').text()
    return headerTitle.length ? headerTitle : currentBlogApp
}

/**
 * 获取粉丝数
 */
export const getFollowers = () => {
    const count = openNews()
        ? $('#profile_block a:nth-of-type(3)')
              .text()
              .trim()
        : '未知'
    return count
}

/**
 * 获取粉丝详情页面链接
 */
export const getFollowersDetailsUrl = () => {
    return `https://home.cnblogs.com/u/${currentBlogApp}/followers/`
}

/**
 * 获取我关注的人的详情页面链接
 */
export const getFollowingDetailsUrl = () => {
    return `https://home.cnblogs.com/u/${currentBlogApp}/followees/`
}

/**
 * 获取关注的人数
 */
export const getFollowing = () => {
    const count = openNews()
        ? $('#profile_block a:nth-of-type(4)')
              .text()
              .trim()
        : '未知'
    return count
}

/**
 * 是否被关注
 */
export const getFollowState = () => {
    return (
        $('#p_b_follow')
            .text()
            .trim() === '-取消关注'
    )
}

export const getBlogAge = () => {
    const age = openNews()
        ? $('#profile_block a:nth-of-type(2)')
              .text()
              .trim()
        : '未知'
    return age
}
