import { pageName } from '@tools'
import './index.scss'

const createElements = (
    top,
    title,
    descText,
    viewCount,
    commentCount,
    diggCount,
    detailUrl,
    editUrl,
) => {
    const cardClass = top
        ? 'custom-card top'
        : 'custom-card'

    return `
    <div class="${cardClass}">
       <a href="${detailUrl}">
           <div class="custom-card-title">${title}</div>
       </a>
        <div class="custom-card-desc">${descText}</div>
        <div class="custom-card-actions">
            <span><li class="fas fa-eye"></li>${viewCount}</span>
            <span><li class="fas fa-comment-dots"></li>${commentCount}</span>
            <span><li class="fas fa-thumbs-up"></li>${diggCount}</span>
            <a href="${detailUrl}"><button>阅读</button></a>
            <a href="${editUrl}"><button>编辑</button></a>
        </div>
    </div>
    `
}

const isTop = string => {
    return string.indexOf('置顶') === -1 ? false : true
}

export default () => {
    if (pageName() !== 'index') return
    $('.c_b_p_desc_readmore').remove()
    $('.forFlow')
        .addClass('index')
        .prepend('<div class="cards-list">')

    const el = $('.day').find(
        '.postTitle,.postCon,.postDesc',
    )

    for (var i = 0; i < el.length; i += 3) {
        const firstEl = $(el.slice(i, i + 3)[0])
        const secondEl = $(el.slice(i, i + 3)[1])
        const thirdEl = $(el.slice(i, i + 3)[2])
        const title = firstEl.text().trim()
        const detailUrl = firstEl.find('a').attr('href')
        const descText = secondEl.text().trim() + '...'
        const editUrl = thirdEl.find('a').attr('href')
        const top = isTop(title)
        const getCounts = selector => {
            return thirdEl
                .find(`${selector}`)
                .text()
                .match(/\(([^)]*)\)/)[1]
        }

        const viewCount = getCounts('.post-view-count')
        const diggCount = getCounts('.post-digg-count')
        const commentCount = getCounts(
            '.post-comment-count',
        )

        const card = createElements(
            top,
            title,
            descText,
            viewCount,
            commentCount,
            diggCount,
            detailUrl,
            editUrl,
        )

        $('.custom-card').length
            ? $('.custom-card:last').after(card)
            : $('.cards-list').prepend(card)
    }

    $('.day').remove()
}
