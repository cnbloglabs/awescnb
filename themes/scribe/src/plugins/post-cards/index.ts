function addPostCardHover() {
  const postCards = document.querySelectorAll('.day')
  postCards.forEach((card) => {
    card.classList.add('transition-all', 'duration-200', 'hover:shadow-md', 'hover:border-primary/20')
  })
}

// 增强文章卡片样式
function enhancePostCards() {
  const postCards = document.querySelectorAll('.day')

  postCards.forEach((card) => {
    // 添加卡片头部装饰
    const header = card.querySelector('.dayTitle')
    if (header) {
      header.classList.add('relative', 'overflow-hidden')

      // 添加渐变背景
      const gradient = document.createElement('div')
      gradient.className = 'absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent'
      header.appendChild(gradient)
    }

    // 优化文章标题
    const postTitle = card.querySelector('.postTitle')
    if (postTitle) {
      const titleLink = postTitle.querySelector('.postTitle2')
      if (titleLink) {
        titleLink.classList.add('hover:text-primary', 'transition-colors')
      }
    }

    // 添加文章元信息图标
    const postDesc = card.querySelector('.postDesc')
    if (postDesc) {
      const stats = postDesc.querySelectorAll('span')
      stats.forEach((stat) => {
        let icon = ''
        if (stat.classList.contains('post-view-count'))
          icon = '👁️ '
        if (stat.classList.contains('post-comment-count'))
          icon = '💬 '
        if (stat.classList.contains('post-digg-count'))
          icon = '👍 '

        if (icon) {
          stat.innerHTML = icon + stat.innerHTML
        }
      })
    }

    // 添加卡片底部装饰
    const cardFooter = document.createElement('div')
    cardFooter.className = 'h-1 bg-gradient-to-r from-primary/20 to-transparent'
    card.appendChild(cardFooter)
  })
}

// 添加时间轴效果
function addTimelineEffect() {
  const days = document.querySelectorAll('.day')
  days.forEach((day, index) => {
    // 添加时间轴线条
    if (index < days.length - 1) {
      const timeline = document.createElement('div')
      timeline.className = 'w-px h-8 bg-border mx-auto'
      day.parentNode?.insertBefore(timeline, day.nextSibling)
    }

    // 添加时间标记
    const dayTitle = day.querySelector('.dayTitle') as HTMLElement
    if (dayTitle) {
      const timeMarker = document.createElement('div')
      timeMarker.className = 'w-3 h-3 bg-primary rounded-full absolute -left-6 top-1/2 transform -translate-y-1/2'
      dayTitle.style.position = 'relative'
      dayTitle.appendChild(timeMarker)
    }
  })
}

export function install() {
  enhancePostCards()
  addTimelineEffect()
  addPostCardHover()
}
