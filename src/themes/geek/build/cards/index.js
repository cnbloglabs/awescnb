import './index.scss'
import {
    isCategoryPage,
    isHomePage,
    HTMLDecode,
} from '@tools'

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

    let el = `
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
    return el
}

const isTop = string => {
    return string.indexOf('置顶') === -1 ? false : true
}

const pageElementInit = () => {
    $('.c_b_p_desc_readmore').remove()
}

const initHomePageElement = () => {}

const initCategoryPageElement = () => {
    $('.forFlow').prepend($('.entrylistTitle'))
    if ($('.pager').length == 2) {
        $('.pager:first').remove()
    }
}

const insertWrap = page => {
    const fnActions = {
        home: 'prepend',
        category: 'append',
    }
    const fn = fnActions[page]
    $('.forFlow')[fn]('<div class="cards-list">')
}

const main = ({ page, wrap, find, callback }) => {
    insertWrap(page)

    const el = $(wrap).find(find)

    for (var i = 0; i < el.length; i += 3) {
        const firstEl = $(el.slice(i, i + 3)[0])
        const secondEl = $(el.slice(i, i + 3)[1])
        const thirdEl = $(el.slice(i, i + 3)[2])
        const title = firstEl.text().trim()
        const detailUrl = firstEl.find('a').attr('href')

        let descText = secondEl.text().trim() + '...'

        // 处理富文本编辑器代码块被解析成 html 以及 php 代码被解析成 HTML 注释
        descText =
            descText.substr(3, 1) === '<'
                ? (descText = '&lt;' + descText.substr(4))
                : HTMLDecode(descText)

        const editUrl = thirdEl.find('a:last').attr('href')
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

    callback()
}

export default () => {
    const home = isHomePage()
    const category = isCategoryPage()
    if (!home && !category) return

    pageElementInit()
    let options = {}

    if (home) {
        initHomePageElement()
        options = {
            page: 'home',
            wrap: '.day',
            find: '.postTitle,.postCon,.postDesc',
            callback() {
                $('.day').remove()
            },
        }
    }

    if (category) {
        initCategoryPageElement()
        options = {
            page: 'category',
            wrap: '.entrylistItem',
            find:
                '.entrylistPosttitle,.entrylistPostSummary,.entrylistItemPostDesc',
            callback() {
                $('.entrylist').remove()
            },
        }
    }

    main(options)
}
