import { useToolsOptions } from '@acnb/options'
import { getCurrentPage, likePost } from '../../utils/cnblog'
import { isPhone } from '../../utils/helpers'
import { toast } from '../toast'

/**
 * 滚动到评论输入框
 * @param {string} container
 */
function scrollToComment(container) {
  $(container).animate(
    {
      scrollTop: $('#mainContent')[0].scrollHeight,
    },
    300,
  )
}

/**
 * 滚动到顶部
 * @param {string} container
 */
function scrollToTop(container) {
  $(container).animate(
    {
      scrollTop: 0,
    },
    200,
  )
}

/**
 * 创建 toolbar 容器
 */
function createToolbarContainer() {
  return $('<div class="custom-toolbar">')
}

/**
 * 创建按钮项中的图标
 */
function createIcon(icon, iconType) {
  const $icon = $('<i>')
  iconType === 'className' ? $icon.addClass(icon) : $icon.html(icon)
  return $icon
}

/**
 * 创建按钮项中的工具提示
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
 * @param {string} icon
 */
function createToggleItem(icon, iconType, isActiveIcon) {
  const $ele = $('<div class="toolbar-item toolbar-item-toggle"></div>')
  const $icon = createIcon(icon, iconType)
  const $tooltip = createTooltip(
    isActiveIcon ? '收起' : '展开',
    ' tooltip-toggle',
  )

  isActiveIcon && $ele.addClass('active').hide()

  $ele.append($icon)
  $ele.append($tooltip)

  return $ele
}

/**
 * 创建 toolbar 按钮项
 */
function createToolbarItem(item, translateY, finalPluginOptions) {
  const { className, callback, icon, iconType, tooltip } = item

  const $item = $(
    `<div class="toolbar-item" style="transform: translateY(-${translateY}px)">`,
  )

  if (className) {
    $item.addClass(className)
  }

  $item.on('click', () => callback(finalPluginOptions))

  const $icon = createIcon(icon, iconType)
  const $tip = createTooltip(tooltip)

  $item.append($icon)
  $item.append($tip)

  return $item
}

/**
 * 创建按钮插件
 */
function createToolbar(finalPluginOptions) {
  const { toolbarItems, menuIcon, menuActiveIcon, menuIconType }
    = finalPluginOptions

  const $toolbar = createToolbarContainer()
  const $toggleItem = createToggleItem(menuIcon, menuIconType, false)
  const $toggleActiveItem = createToggleItem(
    menuActiveIcon,
    menuIconType,
    true,
  )

  const pageCondition = (page) => {
    return page === getCurrentPage() || page === 'all'
  }

  let translateY = 0

  toolbarItems.reverse().forEach((item) => {
    if (!item.enable) {
      return
    }
    if (pageCondition(item.page)) {
      const $item = createToolbarItem(item, translateY, finalPluginOptions)
      translateY += 40
      $toolbar.append($item)
    }
  })

  $toolbar.append($toggleItem).append($toggleActiveItem)
  $('body').append($toolbar)
  $('.toolbar-item-toggle').click(handleToggle)
}

/**
 * 处理展开和收起
 */
function handleToggle() {
  const transformed = (translateY) => {
    let _translateY = translateY
    $('.toolbar-item:not(.toolbar-item-toggle)').each((index, item) => {
      $(item).css({
        transform: `translateY(${_translateY}px)`,
      })
      _translateY += translateY - 40
    })
  }

  const toggleExtend = (isExtend) => {
    const translateY = isExtend ? 90 : -50
    const $menuButton = $('.toolbar-item-toggle:not(.active)')
    const $activeMenuButton = $('.toolbar-item-toggle.active')

    transformed(translateY)

    if (isExtend) {
      $menuButton.show()
      $activeMenuButton.hide()
    } else {
      $menuButton.hide()
      $activeMenuButton.show()
    }
  }

  $('.custom-toolbar').toggleClass('extend')
  $('.custom-toolbar').hasClass('extend')
    ? toggleExtend(false)
    : toggleExtend(true)
}

export function tools(theme, devOptions, pluginOptions) {
  const { enable, initialOpen } = useToolsOptions(devOptions)
  if (!enable) {
    return
  }

  const pluginDefaultOptions = {
    scrollContainer: 'html',
    menuIconType: 'html', // 'className' | 'html'
    menuIcon: '➕',
    menuActiveIcon: '➖',
    toolbarItems: [
      {
        enable: true,
        page: 'all',
        icon: '🚀',
        iconType: 'html',
        tooltip: '回顶',
        callback: config => scrollToTop(config.scrollContainer),
      },
      {
        enable: false,
        page: 'all',
        icon: '🌜',
        iconType: 'html',
        tooltip: '深色',
        className: 'mode-change',
        callback() {},
      },
      {
        enable: true,
        page: 'post',
        icon: '👍',
        iconType: 'html',
        tooltip: '推荐',
        callback() {
          toast('推荐成功')
          likePost()
        },
      },
      {
        enable: true,
        page: 'post',
        icon: '💗',
        iconType: 'html',
        tooltip: '关注',
        callback() {
          toast('关注成功')
          window.follow()
        },
      },
      {
        enable: true,
        page: 'post',
        icon: '📌',
        iconType: 'html',
        tooltip: '收藏',
        callback() {
          window.AddToWz()
        },
      },
      {
        enable: true,
        page: 'post',
        icon: '💬',
        iconType: 'html',
        tooltip: '评论',
        callback: config => scrollToComment(config.scrollContainer),
      },
    ],
  }

  const finalPluginOptions = $.extend(
    true,
    pluginDefaultOptions,
    pluginOptions,
  )

  createToolbar(finalPluginOptions)
  if (!isPhone() && initialOpen) {
    handleToggle()
  }
}
