import { ChevronLeft, ChevronRight, createElement } from 'lucide'

const ChevronLeftIcon = createElement(ChevronLeft)
const ChevronRightIcon = createElement(ChevronRight)

function wrapCurrentPageNumber() {
  document.querySelectorAll('.pager').forEach((pager) => {
    const childNodes = pager.childNodes
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i]
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
        const pageNumber = node.textContent.trim()
        if (!Number.isNaN(Number(pageNumber))) {
          const span = document.createElement('span')
          span.className = 'current'
          span.textContent = pageNumber
          pager.replaceChild(span, node)
        }
      }
    }
  })
}

function addArrowIcons() {
  document.querySelectorAll('.pager a').forEach((link) => {
    const text = link.textContent?.trim()
    if (text === '上一页') {
      link.innerHTML = ''
      const icon = ChevronLeftIcon.cloneNode(true)
      link.appendChild(icon)
      link.appendChild(document.createTextNode('上一页'))
    } else if (text === '下一页') {
      link.innerHTML = ''
      link.appendChild(document.createTextNode('下一页'))
      const icon = ChevronRightIcon.cloneNode(true)
      link.appendChild(icon)
    }
  })
}

export function install() {
  wrapCurrentPageNumber()
  addArrowIcons()
}
