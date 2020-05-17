import './index.scss'
import {
    pageName,
    userAgent,
    hasPostTitle,
    getClientRect,
    throttle,
} from '@tools'

const { enable, position } = window.opts.catalog

// 构建目录
function build() {
    let $catalogContainer = $(
        `<div id="catalog">
            <div class='catalog-title'><h3>目录</h3></div>
        </div>`,
    )
    const $ulContainer = $('<ul></ul>')
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

// 目录固定位置
function setCatalogPosition() {
    const actions = {
        left: () => {
            $('#catalog').addClass('catalog-sticky-left')
            $('#mainContent').css('margin-left', '14vw')
        },
        right: () => {
            $('#catalog').addClass('catalog-sticky-right')
            $('#main').css('flex-direction', 'row-reverse')
            $('#mainContent').css('margin-left', '1vw')
            $('#sideBar').css('margin-left', '-19vw')
        },
        sidebar: () => {
            $('#header').css('padding-left', '11.5vw')
            $('#mainContent').css('width', '60vw')
            $('#catalog').css('width', '16vw')
            setCatalogToggle()
        },
    }

    actions[position]()
}

// 设置目录活跃标题样式
function setActiveCatalogTitle() {
    $(window).scroll(
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
                    if (getClientRect(postTitle).top <= 10) {
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

// 目录固定在侧栏的滚动事件
// 当目录固定在侧边栏
// 到原来的sidebar滚动到不可见位置才显示catalog
function setCatalogToggle() {
    if (position !== 'sidebar') return
    var p = 0,
        t = 0
    $(window).scroll(
        throttle(
            function() {
                const bottom = getClientRect(
                    document.querySelector('#sideBarMain'),
                ).bottom
                if (bottom <= 0) {
                    $('#catalog').addClass('catalog-sticky')
                    p = $(this).scrollTop()
                    t <= p
                        ? $('#catalog').addClass('catalog-scroll-up')
                        : $('#catalog').removeClass('catalog-scroll-up')
                    setTimeout(function() {
                        t = p
                    }, 0)
                } else {
                    $('#catalog').removeClass('catalog-sticky')
                }
            },
            50,
            1000 / 60,
        ),
    )
}

function catalog() {
    if (!enable) return
    if (!hasPostTitle()) return
    if (pageName() !== 'post') return
    if (userAgent() !== 'pc') return
    build()
    setActiveCatalogTitle()
    setCatalogToggle()
}

export default catalog
