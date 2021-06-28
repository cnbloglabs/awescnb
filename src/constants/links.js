/**
 * 博客园相关链接
 */
import { getBlogname } from 'utils/cnblog'

const { currentBlogApp } = window
const blogname = getBlogname()
const home = 'https://home.cnblogs.com'
const cnblog = 'https://www.cnblogs.com'

/* 粉丝 */
export const followersDetailsUrl = `${home}/u/${currentBlogApp}/followers/`

/* 我的关注 */
export const followingDetailsUrl = `${home}/u/${currentBlogApp}/followees/`

/* 关注园友最新博文 */
export const following = `${cnblog}/following`

/* 我评 */
export const commented = `${cnblog}/aggsite/mycommented`

/* 我赞 */
export const mydigged = `${cnblog}/aggsite/mydigged`

/* 用户博客首页 */
export const index = `${cnblog}/${currentBlogApp}`

/* 博客园首页 */
export const cnblogHome = 'https://www.cnblogs.com/'

/* 新随笔 */
export const newPost = 'https://i.cnblogs.com/posts/edit'

/* 联系 */
export const send = $('#blog_nav_contact').attr('href')

/* 订阅 */
export const rss = `https://www.cnblogs.com/${currentBlogApp}/rss/`

/* 管理 */
export const admin = 'https://i.cnblogs.com/'

/* 用户详情页 */
export const userDetails = `https://home.cnblogs.com/u/${currentBlogApp}/`

/* 联系博主 */
export const contact = `https://msg.cnblogs.com/send/${blogname}`

/* 收藏 */
export const appWz = 'https://wz.cnblogs.com/'

/* 博问 */
export const appQ = 'https://q.cnblogs.com/'

/* 闪存 */
export const appIng = 'https://ing.cnblogs.com/'

/* 小组 */
export const appGroup = 'https://group.cnblogs.com/'

/* 消息 */
export const message = 'https://msg.cnblogs.com/'
