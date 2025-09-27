function addTagCloud() {
  const sidebar = document.querySelector('#sideBar')
  if (!sidebar) return

  const tagCloud =
    sidebar.querySelector('#sidebar_tags') ||
    sidebar.querySelector('.catListTag')
  if (tagCloud) {
    const tags = tagCloud.querySelectorAll('a')
    const className =
      'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-colors overflow-hidden border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:!no-underline color-inherit'
    tags.forEach((tag, _index) => {
      tag.classList.add(...className.split(' '))
    })
  }
}

export function install() {
  addTagCloud()
}
