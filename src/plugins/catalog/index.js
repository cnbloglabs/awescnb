import { catalogConfig } from 'options/plugins'
import { userAgent, getClientRect, debounce } from 'utils/helpers'
import { getCurrentPage, hasPostTitle } from 'utils/cnblog'

/**
 * 构建目录容器
 */
function buildCatalogContainer(showTitle) {
    const container = $(`<nav id="catalog"></nav>`)
    if (showTitle) {
        container.append(`<h3 class='catalog-title'>目录</h3>`)
    }
    return container
}

/**
 * 构建目录列表
 */
function buildCatalogList() {
    const $list = $('<ul>')
    const regExp = /^h[1-6]$/

    // $('#cnblogs_post_body')
    //     .children()
    $('#cnblogs_post_body :header').each(function(index) {
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

            const title = $(
                `<li class='${className}'><a href='#${id}'>${text}</a></li>`,
            )
            if (index === 0) {
                title.addClass('catalog-active')
            }
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
function buildCatalog(selector, fn, showTitle) {
    const container = buildCatalogContainer(showTitle)
    const catalogList = buildCatalogList()
    const catalog = container.append(catalogList)
    $(selector)[fn]($(catalog))
}

/**
 * 处理滚动事件
 */
function handleScroll(scrollContainer, updateNavigation) {
    $(scrollContainer).scroll(
        debounce(
            () => {
                setActiveTitle()
                autoScroll(scrollContainer, updateNavigation)
            },
            50,
            1000 / 60,
        ),
    )
}

// TODO: 目录自动滚动
// https://stackoverflow.com/questions/61282426/fixed-sidebar-scroll-to-anchor-links-when-main-body-is-scrolled?r=SearchResults
function autoScroll(scrollContainer, updateNavigation) {
    if (!updateNavigation) {
        return
    }
    const navigation = $('#catalog')

    if (scrollContainer.scrollY < 100) {
        return navigation.stop().animate(
            {
                scrollTop: 0,
            },
            800,
        )
    }

    $('#cnblogs_post_body :header').each(function() {
        const sectionName = $(this).attr('id')
        const navigationMatch = $('a[href="#' + sectionName + '"]', navigation)

        if (
            $(this).offset().top - $(window).height() / 2 <
                $(window).scrollTop() &&
            $(this).offset().top + $(this).height() - $(window).height() / 2 >
                $(window).scrollTop()
        ) {
            const position =
                navigationMatch.position().top + navigation.scrollTop()

            //TODO: Use cached selector, exit .each() when first occurrence found
            return navigation.stop().animate(
                {
                    scrollTop: position,
                },
                800,
            )
        }
    })
}

/**
 * 标题动态高亮
 * @param {String} scrollContainer
 */
function setActiveTitle() {
    for (let i = $('#catalog ul li').length - 1; i >= 0; i--) {
        const titleId = $($('#catalog ul li')[i])
            .find('a')
            .attr('href')
            .replace(/[#]/g, '')
        const postTitle = document.querySelector(
            `#cnblogs_post_body [id='${titleId}']`,
        )
        if (getClientRect(postTitle).top <= 100) {
            if ($($('#catalog ul li')[i]).hasClass('catalog-active')) return
            $($('#catalog ul li')[i]).addClass('catalog-active')
            $($('#catalog ul li')[i])
                .siblings()
                .removeClass('catalog-active')
            return
        }
    }
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

/**
 * 设置滚动条
 * @param {*} showScrollbar
 */
function setScrollbar(showScrollbar) {
    if (!showScrollbar) {
        $('#catalog').css({
            overflow: 'hidden',
        })
    }
}

export default (theme, devOptions, pluginOptions = {}) => {
    const extraOptions = {
        selector: '',
        fn: 'before',
        scrollContainer: window,
        updateNavigation: false,
        showTitle: true,
        showScrollbar: true,
    }

    $.extend(true, extraOptions, pluginOptions)
    const { enable } = catalogConfig(devOptions)
    const {
        selector,
        fn,
        scrollContainer,
        updateNavigation,
        showTitle,
        showScrollbar,
    } = extraOptions

    if (
        enable &&
        hasPostTitle() &&
        getCurrentPage() === 'post' &&
        userAgent() === 'pc'
    ) {
        buildCatalog(selector, fn, showTitle)
        handleScroll(scrollContainer, updateNavigation)
        toggle()
        setScrollbar(showScrollbar)
    }
}
