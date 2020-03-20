import { pageName } from '@/assets/js/tools'

function btns() {
    if (pageName() !== 'post') return
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

export default btns