import './index.css'
import { pageName } from '@tools'

function postMessage() {
    if (pageName() !== 'post') return

    let categories = $(`<div class='custom-categories'>🎈</div>`)
    let tags = $(`<div class='custom-tags'>🏷</div>`)

    if ($('#BlogPostCategory a').length) {
        $('#BlogPostCategory a').each(function() {
            categories.append($(this).get(0))
        })
    } else {
        categories.append(`<a>未分类</a>`)
    }

    if ($('#EntryTag a').length) {
        $('#EntryTag a').each(function() {
            tags.append($(this).get(0))
        })
    } else {
        tags.append(`<a>无标签</a>`)
    }

    const date = $('#post-date').text()
    const viewCount = $('#post_view_count').text()
    const commentCount = $('#post_comment_count').text()

    const ele = `
                <div id='custom-post-message'>
                    <div class='custom-post-message-top'>
                        ${categories.prop('outerHTML')}
                        ${tags.prop('outerHTML')}
                    </div>
                    <div class='custom-post-message-bottom'>
                        <span>${date}</span>
                        <span>阅读 ${viewCount}</span>
                        <span>评论 ${commentCount}</span>
                    </div>
                </div>
                `

    $('.post').prepend(ele)
}

export default postMessage
