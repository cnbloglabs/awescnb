/**
 * 博客园
 */

const { currentBlogApp } = window

/**
 * 工具函数
 * 是否开启公告
 * @returns {Boolean}
 */
const openNews = () => {
    return !!$('#profile_block').length
}

/**
 * 获取博客园昵称
 */
export const getBlogname = () => {
    if (openNews()) {
        return $('#profile_block>a:nth-of-type(1)').text()
    }
    const headerTitle = $('#Header1_HeaderTitle').text()
    if (headerTitle.length) return headerTitle
    return currentBlogApp
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

/**
 * 获取园龄
 */
export const getBlogAge = () => {
    const age = openNews()
        ? $('#profile_block a:nth-of-type(2)')
              .text()
              .trim()
        : '未知'
    return age
}

/**
 * 获取相册地址
 */
export const getAlbumUrl = () => {
    return ``
}

/**
 * 获取当前随笔链接
 */
export const getCurrentPostUrl = () => {
    return location.href.indexOf('#') === -1
        ? location.href
        : location.href.substring(0, location.href.lastIndexOf('#'))
}
