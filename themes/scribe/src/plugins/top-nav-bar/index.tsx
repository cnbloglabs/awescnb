import { render } from 'preact'
import { Component } from './component'
import { queryData } from './data'
import './index.css'

export function topNavBar() {
  const data = queryData()

  const frag = document.createDocumentFragment()
  render(<Component data={data} />, frag)
  document.body.prepend(frag)
}
