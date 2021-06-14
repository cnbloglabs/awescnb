import { poll } from 'utils/helpers'
const { currentBlogApp } = window

/**
 * @description 访问者是否为博主
 * @returns {Boolean}
 */
export const isOwner = () => window.isBlogOwner

/**
 * @description 获取用户登录状态
 * @returns {Boolean}
 */
export const getLoginState = () => window.isLogined

/**
 * @description 是否开启公告
 * @returns {Boolean}
 */
export const openNews = () => !!$('#profile_block').length

/**
 * @description 获取博客园昵称
 * @returns {String}
 */
export function getBlogname() {
    if (openNews()) {
        return $('#profile_block>a:nth-of-type(1)')
            .html()
            .trim()
    }
    const headerTitle = $('#Header1_HeaderTitle')
        .text()
        .trim()
    if (headerTitle.length) {
        return headerTitle
    }
    return currentBlogApp
}

/**
 * @description 获取粉丝数
 * @returns {Number}
 */
export function getFollowers() {
    const count = openNews()
        ? $('#profile_block a:nth-of-type(3)')
              .text()
              .trim()
        : '未知'
    return count
}

/**
 * @description 获取关注的人数
 * @returns {Number}
 */
export function getFollowing() {
    const count = openNews()
        ? $('#profile_block a:nth-of-type(4)')
              .text()
              .trim()
        : '未知'
    return count
}

/**
 * @description 是否已经关注
 * @returns {Boolean}
 */
export function getFollowState() {
    return (
        $('#p_b_follow>a')
            .text()
            .trim() === '-取消关注'
    )
}
3

/**
 * @description 获取园龄
 * @returns {Number}
 */
export function getBlogAge() {
    return openNews()
        ? $('#profile_block a:nth-of-type(2)')
              .text()
              .trim()
        : '未知'
}

/**
 * @description 获取当前随笔链接
 * @returns {String}
 */
export function getCurrentPostUrl() {
    return location.href.indexOf('#') === -1
        ? location.href
        : location.href.substring(0, location.href.lastIndexOf('#'))
}

/**
 * @description 获取博客园 user guid
 */
export function getBlogUserGuid() {
    const strValue = $('body>script:last').text()
    const regex = /'([^"]*)'/g
    return regex.exec(strValue)[1]
}

/**
 * @description 关注
 * @returns {Boolean}
 */
export const follow = () => {
    const guid = window.cb_blogUserGuid
    if (guid) {
        window.follow(guid)
    } else {
        $('#p_b_follow>a').trigger('click')
    }
}

/**
 * @description 取消关注
 * @returns {String}
 */
export const unfollow = () => {
    window.unfollow(window.cb_blogUserGuid)
}

/**
 * 文章是否打开了评论
 * @returns {Boolean}
 */
export const IsCommentTurnedOn = () => !!$('#tbCommentBody').length

/**
 * 是否为随笔详情页
 */
export function isPostDetailsPage() {
    return !!$('#post_detail').length
}

/**
 * 是否为首页
 */
export function isHomePage() {
    return !!$('.day').length
}

/**
 * 是否为标签列表页
 */
export function isTagListPage() {
    return !!$('#taglist_main').length
}

/**
 * 是否为随笔详情页
 */
export function isEntrylistPage() {
    return !!$('.entrylistPosttitle').length
}

/**
 * 是否相册页
 */
export function isAlbumPage() {
    return !!$('.gallery').length
}

/**
 * 是否为随笔分类页
 */
export function isCategoryPage() {
    return !!$('.entrylistItem').length
}

/**
 * @description 获取当前页面名称
 * @returns 'post' | 'index' | 'tag' | 'list' | 'tag' | 'taglist'
 */
export function getCurrentPage() {
    return $('#post_detail').length
        ? 'post'
        : $('.day').length
        ? 'index'
        : $('#taglist_main').length
        ? 'tag'
        : $('.entrylistPosttitle').length
        ? 'list'
        : $('#myposts').length
        ? 'tag'
        : void 0
}

/**
 * @description 获编辑器类型是否为md
 * @retuens Boolean
 */
export function isMd() {
    return $('#cnblogs_post_body').hasClass('cnblogs-markdown')
}

/**
 * 文章内容是否存在标题
 * @returns {Boolean}
 */
export function hasPostTitle() {
    return !!$(
        '#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4',
    ).length
}

/**
 * 推荐博文
 * 博客园过滤机制 `windown.votePost`
 * https://group.cnblogs.com/topic/115024.html
 * @returns {Boolean}
 */
export function likePost() {
    // const id = window.location.href.match(/p\/(\S*).html/)[1]
    // window.votePost(parseInt(id), 'Digg')
    $('.diggit').trigger('click')
}

/**
 * 获取用户信息
 * @returns {Promise}
 */
export function getUserInfo() {
    return new Promise(resolve => {
        $(document).ajaxComplete((event, xhr, settings) => {
            if (settings.url === 'https://account.cnblogs.com/user/userinfo') {
                resolve($.parseJSON(xhr.responseText))
            }
        })
    })
}

/**
 * 获取消息数
 * @returns {Number | undefined}
 */
export function getMessageCount() {
    return $('#msg_count').text()
}

/**
 * 获取用户头像
 * @returns {Promise}
 */
export function getUserAvatar() {
    return new Promise(resolve => {
        const res = poll(
            () => $('#user_icon').length,
            () => {
                resolve($('#user_icon').attr('src'))
            },
        )
        if (res === false) {
            resolve('https://www.cnblogs.com/images/aggsite/avatar-default.svg')
        }
    })
}
