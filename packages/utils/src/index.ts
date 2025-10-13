/**
 * 判断访问者是否为博主
 * @returns {boolean} boolean - 是否为博主
 */
export function isOwner(): boolean {
  return window.isBlogOwner
}

/**
 * 判断用户登录是否登录
 * @returns {boolean} 是否登录
 */
export function getLoginState(): boolean {
  return window.isLogined
}

/**
 * 判断是否开启公告
 * @returns {boolean} 是否开启公告
 */
export function openNews(): boolean {
  return !!$('#profile_block').length
}

/**
 * 获取博客园昵称
 * @returns {string} 博客园昵称
 */
export function getBlogName(): string {
  if (openNews()) {
    return $('#profile_block>a:nth-of-type(1)').html().trim()
  }
  const headerTitle = $('#Header1_HeaderTitle').text().trim()
  if (headerTitle.length) {
    return headerTitle
  }
  return window.currentBlogApp
}

/**
 * 获取粉丝数
 * @returns {string} 粉丝数
 */
export function getFollowers(): string {
  return openNews()
    ? $('#profile_block a:nth-of-type(3)').text().trim()
    : '未知'
}

/**
 * 获取关注的人数
 * @returns {string} 关注的人数
 */
export function getFollowing(): string {
  return openNews()
    ? $('#profile_block a:nth-of-type(4)').text().trim()
    : '未知'
}

/**
 * 判断是否已经关注
 * @returns {boolean} 是否已经关注
 */
export function getFollowState(): boolean {
  return $('#p_b_follow>a').text().trim() === '-取消关注'
}

/**
 * 获取园龄
 * @returns {string} 园龄
 */
export function getBlogAge(): string {
  return openNews()
    ? $('#profile_block a:nth-of-type(2)').text().trim()
    : '未知'
}

/**
 * 获取当前博文链接
 * @returns {string} 当前博文链接
 */
export function getCurrentPostUrl(): string {
  return !location.href.includes('#')
    ? location.href
    : location.href.substring(0, location.href.lastIndexOf('#'))
}

/**
 * 获取博客园 user guid
 */
export function getBlogUserGuid(): string {
  const strValue = $('body>script:last').text()
  const regex = /'([^"']*)'/
  const match = regex.exec(strValue)
  return match ? match[1] : ''
}

/**
 * 关注
 */
export function follow(): void {
  const guid = window.cb_blogUserGuid
  if (guid) {
    window.follow(guid)
  } else {
    $('#p_b_follow>a').trigger('click')
  }
}

/**
 * 取消关注
 */
export function unfollow(): void {
  window.unfollow(window.cb_blogUserGuid)
}

/**
 * 判断文章是否打开了评论
 * @returns {boolean} 文章是否打开了评论
 */
export function IsCommentTurnedOn(): boolean {
  return !!$('#tbCommentBody').length
}

/**
 * 判断是否为博文详情页
 * @returns {boolean} 是否为博文详情页
 */
export function isPostDetailsPage(): boolean {
  return !!$('#post_detail').length
}

/**
 * 是否为首页
 * @returns {boolean} 是否为首页
 */
export function isHomePage(): boolean {
  return !!$('.day').length
}

/**
 * 是否为标签列表页
 * @returns {boolean} 是否为标签列表页
 */
export function isTagListPage(): boolean {
  return !!$('#taglist_main').length
}

/**
 * 是否为博文详情页
 * @returns {boolean} 是否为博文详情页
 */
export function isEntrylistPage(): boolean {
  return !!$('.entrylistPosttitle').length
}

/**
 * 判断是否为相册页
 * @returns {boolean} 是否为相册页
 */
export function isAlbumPage(): boolean {
  return !!$('.gallery').length
}

/**
 * 判断是否为博文分类页
 * @returns {boolean} 是否为博文分类页
 */
export function isCategoryPage(): boolean {
  return !!$('.entrylistItem').length
}

export function getCurrentPage():
  | 'home'
  | 'post'
  | 'tags'
  | 'postarchive'
  | 'category'
  | 'photos'
  | 'photoview'
  | 'unknown' {
  // 首页
  if (document.querySelectorAll('.day').length) {
    return 'home'
  }

  // 随笔详情页
  if (document.querySelector('#post_detail')) {
    return 'post'
  }

  // 我的标签页
  if (
    document.querySelector('#taglist_main') ||
    document.querySelector('#myposts')
  ) {
    return 'tags'
  }

  if (
    document.querySelector('.entrylistTitle')?.textContent?.includes('档案')
  ) {
    return 'postarchive'
  }

  // 随笔分类页
  if (
    document.querySelector('.entrylistTitle')?.textContent?.includes('随笔分类')
  ) {
    return 'category'
  }

  // 相册页
  if (
    document.querySelector('.gallery') &&
    !document.querySelector('#ViewPicture1_GalleryImage')
  ) {
    return 'photos'
  }

  // 照片预览页
  if (
    document.querySelector('.gallery') &&
    document.querySelector('#ViewPicture1_GalleryImage')
  ) {
    return 'photoview'
  }

  return 'unknown'
}

/**
 * 判断编辑器类型是否为 md
 * @returns {boolean} 编辑器类型是否为 md
 */
export function isMd(): boolean {
  return $('#cnblogs_post_body').hasClass('cnblogs-markdown')
}

// TODO
/**
 * 判断编辑器类型是否为 tinymce 5
 */
export function isTinymce5(): boolean {
  return false
}

/**
 * 判断文章内容是否存在标题
 * @returns {boolean} 文章内容是否存在标题
 */
export function hasPostTitle(): boolean {
  return !!$(
    '#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4',
  ).length
}

/**
 * 推荐博文
 * 博客园过滤机制禁止调用 `windown.votePost`
 * https://group.cnblogs.com/topic/115024.html
 */
export function likePost(): void {
  $('.diggit').trigger('click')
}

/**
 * 获取用户信息
 * 仅当用户代码放到页脚 HTML 中才有效
 * @returns {Promise<unknown>} 表示用户信息的 Promise 对象
 */
export function getUserInfo(): Promise<unknown> {
  return new Promise((resolve) => {
    $(document).ajaxComplete((_, xhr, settings) => {
      if (settings.url === 'https://account.cnblogs.com/user/userinfo') {
        resolve($.parseJSON(xhr.responseText))
      }
    })
  })
}

/**
 * 获取消息数
 * @returns {string} 消息数
 */
export function getMessageCount(): string {
  return $('#msg_count').text()
}

/**
 * 获取随笔数量
 * @returns {string} 随笔数量
 */
export function getPostCount(): string {
  return $('#stats_post_count').text().trim().replace(/\D/g, '')
}

/**
 * 获取文章数量
 * @returns {string} 文章数量
 */
export function getArticleCount(): string {
  return $('#stats_article_count').text().trim().replace(/\D/g, '')
}

/**
 * 获取评论数量
 * @returns {string} 评论数量
 */
export function getCommentCount(): string {
  return $('#stats-comment_count').text().trim().replace(/\D/g, '')
}

/**
 * 获取博客访问总量
 * @returns {string} 博客访问总量
 */
export function getViewCount(): string {
  return $('#stats-total-view-count>span').text().trim()
}

export function setCodeTheme(mode: 'dark' | 'light') {
  const theme =
    mode === 'dark'
      ? window.darkModeCodeHighlightTheme
      : window.codeHighlightTheme

  window.highlighter.setTheme(theme)
}
