import { getThemeOptions } from 'options/extra'

/**
 * 博客园相关常量
 */

// 当前使用的博客园官方皮肤名称
export const skinName = window.skinName
// 访客id
export const visitorId = window.visitorUserId
// blog id
export const blogId = window.currentBlogId
// blog app
export const blogApp = window.currentBlogApp
// 用户头像
// export const avatar = $('#user_icon').attr('src')
export const avatar = getThemeOptions().avatar
