// 添加关注和推荐按钮
// 使用 dragmenu 代替
import { getCurrentPage } from 'utils/cnblog'
import { poll } from 'utils/helpers'

/**
 * 构建按钮
 */
function build() {
    const $follow = $('#green_channel_follow').prop('outerHTML')
    const $like = $('#green_channel_digg').prop('outerHTML')
    const $wrap = `<div id='custom-post-btn'>${$follow}${$like}</div>`
    $('body').append($wrap)

    const likeText = $('#green_channel_digg').text()
    const followText = $('#green_channel_follow').text()

    likeText === '已推荐'
        ? $('#custom-post-btn #green_channel_digg').text('已赞')
        : $('#custom-post-btn #green_channel_digg').text('点赞')

    followText === '已关注'
        ? $('#custom-post-btn #green_channel_follow').text('已关')
        : $('#custom-post-btn #green_channel_follow').text('关注')
}

export default () => {
    if (getCurrentPage() !== 'post') return
    poll(() => $('#green_channel_follow').length, build)
}
