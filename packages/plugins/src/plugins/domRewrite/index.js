/**
 * DOM 重写插件
 * 用于隐藏、移除或替换页面上的特定元素
 */

/**
 * 获取 DOM 重写配置选项
 * @param {Object} devOptions - 开发者选项
 * @returns {Object} DOM 重写配置
 */
function getDomRewriteOptions(devOptions) {
  const defaultOptions = {
    enable: false,
    rules: [],
  }

  if (devOptions) {
    return { ...defaultOptions, ...devOptions }
  }

  return window?.config?.domRewrite || defaultOptions
}

/**
 * 执行单个 DOM 重写规则
 * @param {Object} rule - 重写规则
 */
function applyRule(rule) {
  const { selector, action = 'hide', content = '', style = {} } = rule

  if (!selector) {
    console.warn('domRewrite: selector is required for rule', rule)
    return
  }

  const $elements = $(selector)

  if ($elements.length === 0) {
    return
  }

  switch (action) {
    case 'hide':
      if (Object.keys(style).length > 0) {
        $elements.css(style)
      } else {
        $elements.css('display', 'none')
      }
      break

    case 'remove':
      $elements.remove()
      break

    case 'replace':
      $elements.replaceWith(content)
      break

    case 'modify':
      if (content) {
        $elements.html(content)
      }
      if (Object.keys(style).length > 0) {
        $elements.css(style)
      }
      break

    case 'addClass':
      $elements.addClass(content)
      break

    case 'removeClass':
      $elements.removeClass(content)
      break

    default:
      console.warn(`domRewrite: unknown action "${action}"`, rule)
  }
}

/**
 * 应用所有 DOM 重写规则
 * @param {Array} rules - 重写规则数组
 */
function applyRules(rules) {
  if (!Array.isArray(rules)) {
    return
  }

  rules.forEach((rule) => {
    try {
      applyRule(rule)
    } catch (error) {
      console.error('domRewrite: error applying rule', rule, error)
    }
  })
}

/**
 * 监听 DOM 变化，在动态内容加载后重新应用规则
 * @param {Array} rules - 重写规则数组
 */
function observeChanges(rules) {
  const observer = new MutationObserver((mutations) => {
    let shouldReapply = false

    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldReapply = true
      }
    })

    if (shouldReapply) {
      setTimeout(() => applyRules(rules), 100)
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })

  // 存储 observer 以便清理
  window._domRewriteObserver = observer
}

/**
 * DOM 重写插件主函数
 * @param {Object} theme - 主题实例
 * @param {Object} devOptions - 开发者选项
 */
export function domRewrite(_, devOptions) {
  const options = getDomRewriteOptions(devOptions)

  if (!options.enable) {
    return
  }

  if (!Array.isArray(options.rules) || options.rules.length === 0) {
    return
  }

  // 初始应用规则
  applyRules(options.rules)

  // 监听 DOM 变化以处理动态加载的内容
  observeChanges(options.rules)
}
