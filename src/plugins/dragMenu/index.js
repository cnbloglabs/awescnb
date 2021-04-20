import toast from '@plugins/toast'
import { toolsConfig } from '@config/plugins.js'

const extraOptions = {
    mobileAutoClose: true,
    items: [
        {
            page: 'all',
            icon: '🚀',
            tooltip: '回顶',
            evenType: 'dblclick',
            callback() {
                // clearTimeout(timer)
                $('html, body, #mainContent').animate(
                    {
                        scrollTop: 0,
                    },
                    200,
                )
            },
        },
        {
            page: 'post',
            icon: '💬',
            tooltip: '评论',
            evenType: 'click',
            callback() {
                $('html, body, #mainContent').animate(
                    {
                        scrollTop: $(
                            '.commentbox_main',
                        ).offset().top,
                    },
                    300,
                )
                toast('跳转成功')
            },
        },
        {
            page: 'post',
            icon: '📌',
            tooltip: '收藏',
            evenType: 'click',
            callback() {
                toast('欢迎收藏🍺')
                window.AddToWz()
            },
        },
        {
            page: 'post',
            icon: '💗',
            tooltip: '关注',
            evenType: 'click',
            callback() {
                toast('感谢关注🍺')
                window.follow()
            },
        },
        {
            page: 'post',
            icon: '👍',
            tooltip: '推荐',
            evenType: 'click',
            callback() {
                toast('推荐成功')
                const id = window.location.href.match(
                    /p\/(\S*).html/,
                )[1]
                window.votePost(parseInt(id), 'Digg')
            },
        },
    ],
}

const createToolbarContainer = () => {
    const $toolbar = $('<div class="custom-toolbar">')
    return $toolbar
}

const createToggleItem = customItemLength => {
    const translateY = -customItemLength * 40
    const ele = $(`
    <div class="toolbar-item toolbar-item-toggle" style="transform: translateY(${translateY}px)">
        <i class="fa-angle-up"></i>
        <div class="tooltip tooltip-toggle">展开</div>,
    </div>`)
    return ele
}

const createToolbarItem = (item, translateY) => {
    const $item = $(
        `<div class="toolbar-item" style="transform: translateY(-${translateY}px)">`,
    )
    const $icon = $('<i>')
    const $tip = $(
        `<div class="tooltip">${item.tooltip}</div>`,
    )

    if (item.className) $item.addClass(item.className)
    $item.on('click', item.callback)

    item.icon.length > 2
        ? $icon.addClass(item.icon)
        : $icon.html(item.icon)

    $item.append($icon)
    $item.append($tip)

    return $item
}

const createToolbar = pluginOptions => {
    const toolItem = pluginOptions.items
    const $toolbar = createToolbarContainer()
    const $toggleItem = createToggleItem(toolItem.length)

    let translateY = 0

    toolItem.forEach(item => {
        const $item = createToolbarItem(item, translateY)
        translateY += 40
        $toolbar.append($item)
    })
    $toolbar.append($toggleItem)
    $('body').append($toolbar)
}

const toggleToolbar = initialOpen => {
    function handleToggle() {
        $('.toolbar-item-toggle').toggleClass('extend')

        const transformed = translateY => {
            let _translateY = translateY
            $(
                '.toolbar-item:not(.toolbar-item-toggle)',
            ).each(function(index, item) {
                $(item).css({
                    transform: `translateY(${_translateY}px)`,
                })
                _translateY += translateY - 40
            })
        }

        const toggleExtend = isExtend => {
            const getArrow = isExtend => {
                const arrow = isExtend ? 'down' : 'up'
                return arrow
            }
            const text = isExtend ? '展开' : '收起'
            const translateY = isExtend ? 90 : -50

            $('.toolbar-item-toggle')
                .find('i')
                .removeClass(
                    `fa-angle-${getArrow(isExtend)}`,
                )
                .addClass(`fa-angle-${getArrow(!isExtend)}`)
            $('.tooltip-toggle').text(text)
            transformed(translateY)
        }

        $('.toolbar-item-toggle').hasClass('extend')
            ? toggleExtend(false)
            : toggleExtend(true)
    }

    if (initialOpen) {
        handleToggle()
    }

    $('.toolbar-item-toggle').click(handleToggle)
}

export default (devOptions, pluginOptions) => {
    const { enable, initialOpen } = toolsConfig(devOptions)
    if (!enable) return

    $.extend(true, extraOptions, pluginOptions)
    createToolbar(extraOptions)
    toggleToolbar(initialOpen)
}
