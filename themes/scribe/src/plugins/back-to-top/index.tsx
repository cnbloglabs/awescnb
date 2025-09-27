import { render } from 'preact';
import { BackToTop } from './component';

export function backToTop() {
  const frag = document.createDocumentFragment();
  render(<BackToTop />, frag);
  document.body.append(frag);
}
