import './index.css'
import { pageName } from '@tools'

function postMessage() {
    if (pageName() !== 'post') return

    let tags = $(`<div class='custom-tags'>🏷</div>`)
    let categories = $(`<div class='custom-categories'>🎈</div>`)
    const date = $('#post-date').text()
    const viewCount = $('#post_view_count').text()
    const commentCount = $('#post_comment_count').text()
    

    $('#EntryTag a').each(function() {
        tags.append($(this).get(0))
    })
    $('#BlogPostCategory a').each(function() {
        categories.append($(this).get(0))
    })

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
