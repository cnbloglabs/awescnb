// 随笔顶部信息
import { poll } from 'utils/helpers'
import { getCurrentPage } from 'utils/cnblog'

/**
 * 构建主要元素
 */
function buildMainElements() {
    const date = $('#post-date').text()
    const viewCount = $('#post_view_count').text()
    const commentCount = $('#post_comment_count').text()
    const diggCount = $('#digg_count').text()

    $('.post').prepend(`
    <div id='custom-post-message'>
        <div class='custom-post-message-top'>
        </div>
        <div class='custom-post-message-bottom'>
            <span>${date}</span>
            <span>阅读 ${viewCount}</span>
            <span>评论 ${commentCount}</span>
            <span>推荐 ${diggCount}</span>
        </div>
    </div>
    `)
}

/**
 * 构建分类
 */
function buildCategories() {
    const categories = $(`<div class='custom-categories'>📂</div>`)
    const hadBuildCategories = poll(
        $('#BlogPostCategory a').length,
        function() {
            $('#BlogPostCategory a').each(function() {
                categories.append($(this).get(0))
            })
        },
    )
    if (!hadBuildCategories) {
        categories.append(`<a>未分类</a>`)
    }
    $('.custom-post-message-top').append(categories)
}

/**
 * 构建标签
 */
function buildTags() {
    const tags = $(`<div class='custom-tags'>🔖</div>`)
    const hadBuildTags = poll($('#EntryTag a').length, function() {
        $('#EntryTag a').each(function() {
            tags.append($(this).get(0))
        })
    })
    if (!hadBuildTags) {
        tags.append(`<a>无标签</a>`)
    }
    $('.custom-post-message-top').append(tags)
}

export default () => {
    if (getCurrentPage() !== 'post') return
    buildMainElements()
    buildCategories()
    buildTags()
}
