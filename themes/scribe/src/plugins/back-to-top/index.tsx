import { render } from 'preact'
import { BackToTop } from './component'
import './index.css'

export function backToTop() {
  const frag = document.createDocumentFragment()
  render(<BackToTop />, frag)
  document.body.append(frag)
}
