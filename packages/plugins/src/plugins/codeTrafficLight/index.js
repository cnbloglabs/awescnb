import { getCodeTrafficLightOptions } from 'tona-options'
import { isPostDetailsPage } from '../../utils/cnblog'
import { insertStyle } from '../../utils/helpers'

export function codeTrafficLight(_, devOptions) {
  const { enable } = getCodeTrafficLightOptions(devOptions)

  if (!enable) {
    return
  }
  if (!isPostDetailsPage()) {
    return
  }

  insertStyle(
    "pre[class*='language-'].highlighter-prismjs,pre code.hljs{position:relative;padding:2.5em 1em 1em}pre[class*='language-'].highlighter-prismjs::before,pre code.hljs::before{content:'';position:absolute;top:10px;left:12px;width:12px;height:12px;background:#fe5f59;border-radius:50%;box-shadow:20px 0 #febb2c,40px 0 #29c73f;z-index:2;}",
  )
}
