import { render } from 'preact'
import { LeftSidebar } from './components/left-sidebar'
import './index.css'

export function leftSidebar() {
  const frag = document.createDocumentFragment()
  render(<LeftSidebar />, frag)

  const container = document.querySelector('#main') as HTMLElement
  container.prepend(frag)
}
