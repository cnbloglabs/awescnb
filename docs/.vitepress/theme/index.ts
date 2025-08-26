import { inBrowser } from 'vitepress'
import 'uno.css'
import './style/index.css'

if (inBrowser) {
  import('./pwa')
  window.onload = function () {
    const _navBarContainer = document.querySelector('.VPNavBar>.container')
    _navBarContainer?.insertBefore(
      createDocumentFragment(
        `<div class="custom-logo flex items-center cursor-pointer"><span class="i-carbon:page-last inline-block text-lg"></span><span class="ml-2">Cnblog Labs</span></div>`,
      ),
      _navBarContainer.firstChild,
    )
    document
      .querySelector('.custom-logo')
      ?.addEventListener('click', () => (location.href = '/'))
  }
}

function createDocumentFragment(template: string) {
  return document.createRange().createContextualFragment(template)
}

export default Object.assign(
  {},
  // VPTheme
)
