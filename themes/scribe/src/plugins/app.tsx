import { render } from 'preact'
import { App } from '../app'

export function app() {
  const frag = document.createDocumentFragment()
  render(<App />, frag)
  document.body.prepend(frag)
}
