import { catalogConfig } from 'options/plugins'
import { userAgent, getClientRect, throttle } from 'utils/helpers'
import { getCurrentPage, hasPostTitle } from 'utils/cnblog'

/**
 * 构建目录容器
 */
function buildCatalogContainer() {
    const $container = $(
        `<nav id="catalog"><h3 class='catalog-title'>目录</h3></nav>`,
    )
    return $container
}

/**
 * 构建目录列表
 */
function buildCatalogList() {
    const $list = $('<ul>')
    const regExp = /^h[1-6]$/

    $('#cnblogs_post_body')
        .children()
        .each(function() {
            if (regExp.test(this.tagName.toLowerCase())) {
                const className = `${this.nodeName.toLowerCase()}-list`
                const mathNode = $(this).children('.math.inline')
                let text
                let id

                if (mathNode.length) {
                    text =
                        mathNode.prop('outerHTML') +
                        $(this)
                            .contents()
                            .filter(function() {
                                return this.nodeType === 3
                            })
                            .text()
                } else {
                    text = $(this).text()
                }

                if (text.length === 0) return // 如果标题为空 只有 #

                if (this.id !== '') {
                    id = this.id
                } else {
                    id = text.trim()
                    $(this).attr('id', id)
                }

                const title = `<li class='${className}'><a href='#${id}'>${text}</a></li>`
                $list.append(title)
            }
        })
    return $list
}

/**
 * 构建目录
 * @param {String} selector
 * @param {Function} fn
 */
function buildCatalog(selector, fn) {
    const container = buildCatalogContainer()
    const catalogList = buildCatalogList()
    const catalog = container.append(catalogList)
    $(selector)[fn]($(catalog))
}

/**
 * 标题动态高亮
 * @param {String} scrollContainer
 */
function setActiveTitle(scrollContainer) {
    $(scrollContainer).scroll(
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

/**
 * 目录显示隐藏
 */
function toggle() {
    $('.catalog-title').click(function() {
        $('#catalog ul').toggle('fast', 'linear', function() {
            $(this).css('display') === 'none'
                ? $('.catalog-title').removeClass('is-active')
                : $('.catalog-title').addClass('is-active')
        })
    })
}

export default (theme, devOptions, pluginOptions = {}) => {
    const extraOptions = {
        selector: '',
        fn: 'before',
        scrollContainer: window,
    }

    $.extend(true, extraOptions, pluginOptions)
    const { enable } = catalogConfig(devOptions)
    const { selector, fn, scrollContainer } = extraOptions

    if (
        enable &&
        hasPostTitle() &&
        getCurrentPage() === 'post' &&
        userAgent() === 'pc'
    ) {
        buildCatalog(selector, fn)
        setActiveTitle(scrollContainer)
        toggle()
    }
}
