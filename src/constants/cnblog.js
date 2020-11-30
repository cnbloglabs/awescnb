// 是否为访客
const isVisitor = !window.isBlogOwner
// 访客id
const visitorId = window.visitorUserId
// 是否为博主本人
const isOwner = window.isBlogOwner
// blog id
const blogId = window.currentBlogId
// blog app
const blogApp = window.currentBlogApp
// 是否登录
const isLogined = window.isLogined
// 官方皮肤名称
const skinName = window.skinName
// 用户头像
function avatar() {
    console.log(1)
    $(document).ajaxComplete(function(event, xhr, option) {
        if (option.url.indexOf('userinfo') > -1) {
            console.log(event, xhr, option)
        }
    })
}

avatar()

export {
    isVisitor,
    visitorId,
    isOwner,
    blogId,
    blogApp,
    isLogined,
    skinName,
}
