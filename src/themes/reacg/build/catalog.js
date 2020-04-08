import { pageName, hasPostTitle, userAgent } from '@tools'

const { enable, position } = window.opts.catalog

let $catalogContainer

function build() {
    $catalogContainer = $('<div id="catalog"></div>')
    $catalogContainer.append($(`<div class='catListTitle'><h3>目录</h3></div>`))
}

// 如果使用 markdown
function markdown() {
    const $ulContainer = $('<ul></ul>')
    const titleReg = /^h[1-3]$/

    $('#cnblogs_post_body')
        .children()
        .each(function() {
            if (titleReg.test(this.tagName.toLowerCase())) {
                let id
                let text

                if (this.id !== '') {
                    id = this.id
                    text =
                        this.childNodes.length === 2
                            ? this.childNodes[1].nodeValue
                            : this.childNodes[0].nodeValue
                } else {
                    if (this.childNodes.length === 2) {
                        const value = this.childNodes[1].nodeValue
                        text = value ? value : $(this.childNodes[1]).text()
                    } else {
                        const value = this.childNodes[0].nodeValue
                        text = value ? value : $(this.childNodes[0]).text() // 处理标题被 span 包裹的情况
                    }
                    id = text.trim()
                    $(this).attr('id', id)
                }

                const title = `
                            <li class='${this.nodeName.toLowerCase()}-list'>
                                <a href='#${id}'>${text}</a>
                            </li>
                        `

                $ulContainer.append(title)
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

    actions[position]()
}

function catalog() {
    if (!enable) return
    if (!hasPostTitle()) return
    if (pageName() !== 'post') return
    if (userAgent() !== 'pc') return
    build()
    markdown()
}

export default catalog
