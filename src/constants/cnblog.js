// 是否为访客
const isVisitor = !window.isBlogOwner
//
const visitorId = window.visitorUserId
// 是否为博主本人
const isOwner = window.isBlogOwner
//
const blogId = window.currentBlogId
//
const blogApp = window.currentBlogApp
//
const isLogined = window.isLogined
//
const skinName = window.skinName

export { isVisitor, isOwner, blogId, blogApp, isLogined, skinName, visitorId }
