import { catalogConfig } from '@config/plugins.js'
import {
    pageName,
    userAgent,
    hasPostTitle,
    getClientRect,
    throttle,
} from '@tools'

/**
 * 构建目录元素
 */
function build(selector, fn) {
    let $container = $(
        `<nav id="catalog">
            <h3 class='catalog-title'>目录</h3>
        </nav>`,
    )

    const $list = $('<ul>')
    const regExp = /^h[1-3]$/

    $('#cnblogs_post_body')
        .children()
        .each(function() {
            if (regExp.test(this.tagName.toLowerCase())) {
                let id
                let text = $(this).text()
                if (text.length === 0) return // 如果标题为空 只有 #
                if (this.id !== '') {
                    id = this.id
                } else {
                    id = text.trim()
                    $(this).attr('id', id)
                }

                const title = `
                <li class='${this.nodeName.toLowerCase()}-list'>
                    <a href='#${id}'>${text}</a>
                </li>`

                $list.append(title)
            }
        })

    $(selector)[fn]($($container.append($list)))
}

/**
 * 标题动态高亮
 */
function setActiveTitle(scrollContainer) {
    $(scrollContainer).scroll(
        throttle(
            function() {
                for (
                    let i = $('#catalog ul li').length - 1;
                    i >= 0;
                    i--
                ) {
                    const titleId = $(
                        $('#catalog ul li')[i],
                    )
                        .find('a')
                        .attr('href')
                        .replace(/[#]/g, '')
                    const postTitle = document.querySelector(
                        `#cnblogs_post_body [id='${titleId}']`,
                    )
                    if (
                        getClientRect(postTitle).top <= 100
                    ) {
                        if (
                            $(
                                $('#catalog ul li')[i],
                            ).hasClass('catalog-active')
                        )
                            return
                        $($('#catalog ul li')[i]).addClass(
                            'catalog-active',
                        )
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
        $('#catalog ul').toggle(
            'fast',
            'linear',
            function() {
                $(this).css('display') === 'none'
                    ? $('.catalog-title').removeClass(
                          'is-active',
                      )
                    : $('.catalog-title').addClass(
                          'is-active',
                      )
            },
        )
    })
}

export default (pluginOptions = {}, devOptions) => {
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
        pageName() === 'post' &&
        userAgent() === 'pc'
    ) {
        build(selector, fn)
        setActiveTitle(scrollContainer)
        toggle()
    }
}
