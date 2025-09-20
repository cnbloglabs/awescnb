// 优化页面布局结构
function optimizeLayout() {
  const main = document.querySelector('#main')
  if (!main)
    return

  // 创建响应式布局容器
  const container = document.createElement('div')
  container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

  // 创建主要内容区域
  const contentWrapper = document.createElement('div')
  contentWrapper.className = 'flex flex-col lg:flex-row gap-8'

  // 获取主要内容
  const mainContent = document.querySelector('#mainContent')
  const sideBar = document.querySelector('#sideBar')

  if (mainContent) {
    mainContent.className = 'flex-1'
    contentWrapper.appendChild(mainContent)
  }

  if (sideBar) {
    sideBar.className = 'w-full lg:w-80 flex-shrink-0'
    contentWrapper.appendChild(sideBar)
  }

  container.appendChild(contentWrapper)
  main.innerHTML = ''
  main.appendChild(container)
}

// 添加加载动画
function addLoadingAnimation() {
  const posts = document.querySelectorAll('.day')
  posts.forEach((post, index) => {
    const postElement = post as HTMLElement
    postElement.style.opacity = '0'
    postElement.style.transform = 'translateY(20px)'
    postElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease'

    setTimeout(() => {
      postElement.style.opacity = '1'
      postElement.style.transform = 'translateY(0)'
    }, index * 100)
  })
}

export function install() {
  optimizeLayout()
  addLoadingAnimation()
}
