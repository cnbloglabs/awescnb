import {
    pageName,
    userAgent,
    hasPostTitle,
    getClientRect,
    throttle,
} from '@tools'

const { enable } = window.opts.catalog

// 构建目录
function build() {
    let $catalogContainer = $(
        `<nav id="catalog">
            <div class='catalog-title'><h3>目录</h3></div>
        </nav>`,
    )
    const $ulContainer = $('<ul>')
    const titleRegExp = /^h[1-3]$/

    $('#cnblogs_post_body')
        .children()
        .each(function() {
            if (titleRegExp.test(this.tagName.toLowerCase())) {
                if ($(this).text().length === 0) return // 如果标题为空 只有 #
                let id
                let text

                if (this.id !== '') {
                    id = this.id
                    // text =
                    //     this.childNodes.length === 2
                    //         ? this.childNodes[1].nodeValue
                    //         : this.childNodes[0].nodeValue
                    text = $(this).text()
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

    const $catalog = $($catalogContainer.append($ulContainer))
    $('#blog-calendar').before($catalog)
}

// 设置目录活跃标题样式
function setActiveCatalogTitle() {
    $('#mainContent').scroll(
        throttle(
            function() {
                for (let i = $('#catalog ul li').length - 1; i >= 0; i--) {
                    const titleId = $($('#catalog ul li')[i])
                        .find('a')
                        .attr('href')
                        .replace(/[#]/g, '')
                    const postTitle = document.querySelector(
                        `#cnblogs_post_body [id='${titleId}']`,
                    )
                    if (getClientRect(postTitle).top <= 100) {
                        if (
                            $($('#catalog ul li')[i]).hasClass('catalog-active')
                        )
                            return
                        $($('#catalog ul li')[i]).addClass('catalog-active')
                        $($('#catalog ul li')[i])
                            .siblings()
                            .removeClass('catalog-active')
                        return
                    }
                }
            },
            50,
            1000 / 60,
        ),
    )
}

function toggle() {
    $('.catalog-title').click(function() {
        $('#catalog ul').toggle('fast', 'linear', function() {
            $(this).css('display') === 'none'
                ? $('.catalog-title').removeClass('is-active')
                : $('.catalog-title').addClass('is-active')
        })
    })
}

function catalog() {
    if (
        enable &&
        hasPostTitle() &&
        pageName() === 'post' &&
        userAgent() === 'pc'
    ) {
        build()
        setActiveCatalogTitle()
        toggle()
    }
}

export default catalog
