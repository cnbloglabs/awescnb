export const { login, logout, register, currentBlogApp } = window

/**
 * 获取账户昵称
 */
export const getUsername = () => {
    return currentBlogApp ? currentBlogApp : '昵称'
}

// 获取博客园昵称

export const getBlogname = () => {
    const headerTitle = $('#Header1_HeaderTitle').text()
    return headerTitle.length ? headerTitle : getUsername()
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
