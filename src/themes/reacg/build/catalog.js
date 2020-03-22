import { pageName, hasPostTitle, userAgent } from '@/assets/utils/tools'

const options = window.opts.catalog

// 设置随笔目录
function setCatalog() {
    if (!options.enable) return
    if (!hasPostTitle()) return
    if (pageName() !== 'post') return
    if (userAgent() !== 'pc') return

    const $post = $($('#cnblogs_post_body'))
    const $catalogContainer = $('<div>')
    const $ulContainer = $('<ul>')
    const titleReg = /^h[1-3]$/

    $catalogContainer
        .attr('id', 'catalog')
        .append($(`<div class='catListTitle'><h3>目录</h3></div>`))

    $post.children().each(function() {
        if (titleReg.test(this.tagName.toLowerCase())) {
            $(this).append("<a href='#catalog' class='title_back'></a>")
            let aEle = $('<a></a>')
            let hEle = $('<li></li>')
            const text =
                this.childNodes.length === 3
                    ? this.childNodes[1].nodeValue
                    : this.childNodes[0].nodeValue
            aEle.attr('href', '#' + this.id).text(text)
            hEle.attr('class', this.nodeName.toLowerCase() + '-list').append(
                aEle,
            )
            $ulContainer.append(hEle)
        }
    })

    $($catalogContainer.append($ulContainer)).appendTo('#sideBar')
    setCatalogPosition()
}

// 目录固定方式
function setCatalogPosition() {
    const actions = {
        sidebar: () => {
            this.setCatalogToggle()
        },
        left: () => {
            $('#catalog').addClass('catalog-sticky-left')
        },
        right: () => {
            $('#catalog').addClass('catalog-sticky-right')
        },
    }

    actions[options.position]()
}

function catalog() {
    setCatalog()
}

export default catalog
