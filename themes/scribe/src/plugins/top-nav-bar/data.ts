import type { ComponentProps } from 'preact'
import type { Component } from './component'

export function queryData(): ComponentProps<typeof Component>['data'] {
  const blogTitle = document.querySelector('#blogTitle h1 a')?.textContent || ''
  const navList = document.querySelector('#navList')

  const navItems: ComponentProps<typeof Component>['data']['navItems'] = []

  if (navList) {
    const navLinks = navList.querySelectorAll('li a.menu')
    navLinks.forEach((link) => {
      const id = link.id || ''
      const text = link.textContent?.trim() || ''
      const href = link.getAttribute('href') || '#'

      let icon = ''
      if (id.includes('home'))
        icon = 'home'
      else if (id.includes('newpost'))
        icon = 'pen'
      else if (id.includes('contact'))
        icon = 'mail'
      else if (id.includes('rss'))
        icon = 'rss'
      else if (id.includes('admin'))
        icon = 'settings'

      navItems.push({ id, text, href, icon })
    })
  }

  return {
    blogTitle,
    navItems,
    githubUrl: 'https://github.com/cnbloglabs/awescnb',
  }
}
