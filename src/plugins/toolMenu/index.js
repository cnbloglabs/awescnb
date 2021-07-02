import toast from 'plugins/toast'
import { toolsConfig } from 'options/plugins'
import { getCurrentPage, likePost } from 'utils/cnblog'
import { isPhone } from 'utils/helpers'

/**
 * 创建 toolbar 容器
 * @returns {object}
 */
function createToolbarContainer() {
    return $('<div class="custom-toolbar">')
}

/**
 * 创建按钮项中的图标
 * @returns {object}
 */
function createIcon(icon) {
    const $icon = $('<i>')
    icon.length > 2 ? $icon.addClass(icon) : $icon.html(icon)
    return $icon
}

/**
 * 创建按钮项中的工具提示
 * @returns {object}
 */
function createTooltip(text, className) {
    const ele = $(`<div class="tooltip">${text}</div>`)
    if (className) {
        ele.addClass(className)
    }
    return ele
}

/**
 * 创建 toggle 按钮
 * @param {string} menuIcon  icon
 * @returns {object}
 */
function createToggleItem(menuIcon) {
    const ele = $(`<div class="toolbar-item toolbar-item-toggle"></div>`)
    const icon = createIcon(menuIcon)
    const tooltip = createTooltip('展开', ' tooltip-toggle')

    ele.append(icon)
    ele.append(tooltip)

    return ele
}

/**
 * 创建 toolbar 按钮项
 * @param {object} item
 * @param {number} translateY
 * @returns {object} toolbar 按钮的 jq 对象
 */
function createToolbarItem(item, translateY) {
    const $item = $(
        `<div class="toolbar-item" style="transform: translateY(-${translateY}px)">`,
    )

    if (item.className) {
        $item.addClass(item.className)
    }

    $item.on('click', item.callback)

    const icon = createIcon(item.icon)
    const $tip = createTooltip(item.tooltip)

    $item.append(icon)
    $item.append($tip)

    return $item
}

/**
 * 创建按钮插件
 * @param {Array<Object>} pluginOptions
 */
function createToolbar(finalPluginOptions) {
    const toolItem = finalPluginOptions.toolbarItems
    const $toolbar = createToolbarContainer()
    const pageCondition = page => {
        return page === getCurrentPage() || page === 'all'
    }
    // const effectiveLength = toolItem.filter(item => pageCondition(item.page))
    //     .length
    const $toggleItem = createToggleItem(finalPluginOptions.menuIcon)

    let translateY = 0

    toolItem.forEach(item => {
        if (!item.enable) return
        if (pageCondition(item.page)) {
            const $item = createToolbarItem(item, translateY)
            translateY += 40
            $toolbar.append($item)
        }
    })

    $toolbar.append($toggleItem)
    $('body').append($toolbar)
    $('.toolbar-item-toggle').click(handleToggle)
}

/**
 * 处理展开和收起
 */
function handleToggle() {
    $('.toolbar-item-toggle').toggleClass('extend')

    const transformed = translateY => {
        let _translateY = translateY
        $('.toolbar-item:not(.toolbar-item-toggle)').each(function(
            index,
            item,
        ) {
            $(item).css({
                transform: `translateY(${_translateY}px)`,
            })
            _translateY += translateY - 40
        })
    }

    const toggleExtend = isExtend => {
        const text = isExtend ? '展开' : '收起'
        const translateY = isExtend ? 90 : -50
        const getArrow = isExtend => {
            const arrow = isExtend ? 'down' : 'up'
            return arrow
        }

        $('.toolbar-item-toggle')
            .find('i')
            .removeClass(`fa-angle-${getArrow(isExtend)}`)
            .addClass(`fa-angle-${getArrow(!isExtend)}`)

        $('.tooltip-toggle').text(text)
        transformed(translateY)
    }

    $('.toolbar-item-toggle').hasClass('extend')
        ? toggleExtend(false)
        : toggleExtend(true)
}

export default (theme, devOptions, pluginOptions) => {
    const { enable, initialOpen } = toolsConfig(devOptions)
    if (!enable) return

    const pluginDefaultOptions = {
        menuIcon: 'fa-angle-up',
        toolbarItems: [
            {
                enable: true,
                page: 'post',
                icon: '💬',
                tooltip: '评论',
                callback() {
                    $('html, body, #mainContent').animate(
                        {
                            scrollTop: $('.commentbox_main').offset().top,
                        },
                        300,
                    )
                },
            },
            {
                enable: true,
                page: 'post',
                icon: '📌',
                tooltip: '收藏',
                callback() {
                    window.AddToWz()
                },
            },
            {
                enable: true,
                page: 'post',
                icon: '💗',
                tooltip: '关注',
                callback() {
                    toast('关注成功')
                    window.follow()
                },
            },
            {
                enable: true,
                page: 'post',
                icon: '👍',
                tooltip: '推荐',
                callback() {
                    toast('推荐成功')
                    likePost()
                },
            },
            {
                enable: false,
                page: 'all',
                icon: '🌜',
                tooltip: '深色',
                className: 'mode-change',
                callback() {},
            },
            {
                enable: true,
                page: 'all',
                icon: '🚀',
                tooltip: '回顶',
                callback() {
                    $('html, body, #mainContent').animate(
                        {
                            scrollTop: 0,
                        },
                        200,
                    )
                },
            },
        ],
    }

    const finalPluginOptions = $.extend(
        true,
        pluginDefaultOptions,
        pluginOptions,
    )

    createToolbar(finalPluginOptions)
    if (!isPhone() && initialOpen) handleToggle()
}
