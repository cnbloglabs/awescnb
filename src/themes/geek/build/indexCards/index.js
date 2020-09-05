import { pageName } from '@tools'
import './index.scss'

const build = () => {
    $('.forFlow')
        .addClass('index')
        .prepend('<div class="cards-list">')

    const el = $('.day').find('.postTitle,.postCon,.postDesc')

    for (var i = 0; i < el.length; i += 3) {
        const firstEl = $(el.slice(i, i + 3)[0])
        const secondEl = $(el.slice(i, i + 3)[1])
        const thirdEl = $(el.slice(i, i + 3)[2])

        let title = firstEl.text().trim()

        if (!/.*[\u4e00-\u9fa5]+.*$/.test(title)) {
            title = title.substring(0, 25) + '...'
        }

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

        // 'awesCnb'.link(urls.repositories.gitee)

        const card = `
        <div class='custom-card'>
           <a href="${detailUrl}"><div class="postTitle">${title}</div></a>
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
            : $('.cards-list').prepend(card)
    }

    $('.day').remove()
}

const initPager = () => {
    const isFirstPage = $('#nav_next_page').children().length
    if (isFirstPage) {
        $('.forFlow').addClass('first-page')
    }
}

const indexCards = () => {
    if (pageName() !== 'index') return
    initPager()
    build()
}

module.exports = indexCards
