const { login, logout, register, currentBlogApp } = window

/**
 * 获取用户昵称
 */
const getUsername = () => {
    return currentBlogApp ? currentBlogApp : '昵称'
}

/**
 * 是否被关注
 */
const getFollowState = () => {
    return (
        $('#p_b_follow')
            .text()
            .trim() === '-取消关注'
    )
}

export { login, logout, register, getFollowState, getUsername }
