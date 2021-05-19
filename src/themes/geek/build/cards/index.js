import './index.scss'
import { isCategoryPage, isHomePage } from 'utils/cnblog'

/**
 * 创建 card 元素
 * @param {Boolean} top
 * @param {String} title
 * @param {String} descText
 * @param {Number} viewCount
 * @param {Number} commentCount
 * @param {Number} diggCount
 * @param {String} detailUrl
 * @param {String} editUrl
 */
function createCard(
    top,
    title,
    descText,
    viewCount,
    commentCount,
    diggCount,
    detailUrl,
    editUrl,
) {
    const cardClass = top ? 'custom-card top' : 'custom-card'

    let el = `
        <div class="${cardClass}">
            <a href="${detailUrl}">
               <div class="custom-card-title">${title}</div>
            </a>
            <div class="custom-card-desc">${descText}</div>
            <div class="custom-card-actions">
                <div>
                    <li class="fas fa-eye"></li>
                    <span>${viewCount}</span>
                </div>
                <div>
                    <li class="fas fa-comment-dots"></li>
                    <span>${commentCount}</span>
                </div>
                <div>
                    <li class="fas fa-thumbs-up"></li>
                    <span>${diggCount}</span>
                </div>
                <a href="${detailUrl}"><button>阅读</button></a>
                <a href="${editUrl}"><button>编辑</button></a>
            </div>
        </div>
        `
    return el
}

function isTop(string) {
    return string.indexOf('置顶') === -1 ? false : true
}

function pageElementInit() {
    $('.c_b_p_desc_readmore').remove()
}

function initHomePageElement() {}

function initCategoryPageElement() {
    if ($('.pager').length == 2) {
        $('.pager:first').remove()
    }
    if ($('.forFlow>.entrylistTitle').length === 0) {
        $('.entrylistTitle').prependTo('.forFlow')
    }
}

/**
 * 插入 cards 外层元素
 * @param {String} page 当前页面名称
 */
function insertWrap(page) {
    const el = '<div class="cards-list">'
    const actions = {
        home: () => {
            $('.forFlow').prepend(el)
        },
        category: () => {
            $('.entrylistTitle').after(el)
        },
    }
    actions[page]()
}

function build({ page, wrap, find, callback }) {
    insertWrap(page)

    const el = $(wrap).find(find)

    for (var i = 0; i < el.length; i += 3) {
        const firstEl = $(el.slice(i, i + 3)[0])
        const secondEl = $(el.slice(i, i + 3)[1])
        const thirdEl = $(el.slice(i, i + 3)[2])
        const title = firstEl.text().trim()
        const detailUrl = firstEl.find('a').attr('href')
        const descText = secondEl.html()
        const editUrl = thirdEl.find('a:last').attr('href')
        const top = isTop(title)

        const getCounts = selector => {
            if (!thirdEl.find(`${selector}`).text()) {
                return 0
            }
            const count = thirdEl
                .find(`${selector}`)
                .text()
                .match(/\(([^)]*)\)/)[1]
            return count
        }

        const viewCount = getCounts('.post-view-count')
        const diggCount = getCounts('.post-digg-count')
        const commentCount = getCounts('.post-comment-count')

        $('.cards-list').append(
            createCard(
                top,
                title,
                descText,
                viewCount,
                commentCount,
                diggCount,
                detailUrl,
                editUrl,
            ),
        )
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

    build(options)
}
