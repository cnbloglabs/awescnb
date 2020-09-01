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
// 用户博客首页
export const index = `${cnblog}/${currentBlogApp}`
// 博客园首页
export const cnblogHome = 'https://www.cnblogs.com/'
// 新随笔
export const newPost = 'https://i.cnblogs.com/posts/edit'
// 联系
export const send = $('#blog_nav_contact').attr('href')
// 订阅
export const rss = 'about:blank#blocked'
// 管理
export const admin = 'https://i.cnblogs.com/'
