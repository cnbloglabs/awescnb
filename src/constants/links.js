/**
 * 博客园相关链接 url
 */

const { currentBlogApp } = window
const home = 'https://home.cnblogs.com'
const cnblog = 'https://www.cnblogs.com'

// 粉丝
export const followersDetailsUrl = `${home}/u/${currentBlogApp}/followers/`
// 我的关注
export const followingDetailsUrl = `${home}/u/${currentBlogApp}/followees/`
// 关注园友最新博文
export const following = `${cnblog}/following`
// 我评
export const commented = `${cnblog}/aggsite/mycommented`
// 我赞
export const mydigged = `${cnblog}/aggsite/mydigged`
