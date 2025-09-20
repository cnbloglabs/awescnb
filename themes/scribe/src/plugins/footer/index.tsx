import { render } from 'preact'
import { Component } from './component'
import './index.css'

export function footer() {
  const frag = document.createDocumentFragment()
  render(<Component />, frag)
  document.body.append(frag)
}
