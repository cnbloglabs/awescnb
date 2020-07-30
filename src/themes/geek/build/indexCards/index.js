import { pageName } from '@tools'
import './index.scss'

const build = () => {
    if (pageName() === 'index') $('.forFlow').addClass('index')
    const el = $('.day').find('.postTitle,.postCon,.postDesc')

    for (var i = 0; i < el.length; i += 3) {
        const firstEl = $(el.slice(i, i + 3)[0])
        const secondEl = $(el.slice(i, i + 3)[1])
        const thirdEl = $(el.slice(i, i + 3)[2])

        let title = firstEl.text().trim()

        if (!/.*[\u4e00-\u9fa5]+.*$/.test(title)) {
            title = title.substring(0, 25) + '...'
        }

        console.log(title)

        const desc = secondEl.prop('outerHTML')
        const detailUrl = secondEl.find('a').attr('href')
        const editUrl = thirdEl.find('a').attr('href')

        const getCounts = selector => {
            return thirdEl
                .find(`${selector}`)
                .text()
                .match(/\(([^)]*)\)/)[1]
        }

        const viewCount = getCounts('.post-view-count')
        const commentCount = getCounts('.post-comment-count')
        const diggCount = getCounts('.post-digg-count')

        const card = `
        <div class='custom-card'>
            <div class="postTitle">${title}</div>
            ${desc}
            <div class="custom-card-actions">
                <span><li class="fas fa-eye"></li>${viewCount}</span>
                <span><li class="fas fa-comment-dots"></li>${commentCount}</span>
                <span><li class="fas fa-thumbs-up"></li>${diggCount}</span>
                <a href="${detailUrl}"><button>阅读</button></a>
                <a href="${editUrl}"><button>编辑</button></a>
            </div>
        </div>
        `

        $('.custom-card').length
            ? $('.custom-card:last').after(card)
            : $('.forFlow').prepend(card)
    }

    $('.day').remove()
}

const indexCards = () => {
    build()
}

module.exports = indexCards
