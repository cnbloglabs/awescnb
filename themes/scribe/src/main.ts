import { createTheme } from '@acnb/core'
import { backToTop } from './plugins/back-to-top'
import { footer } from './plugins/footer'
import { leftSidebar } from './plugins/left-sidebar/index'
import { pagination } from './plugins/pagination/index'
import { smoothScroll } from './plugins/smooth-scroll'
import { topNavBar } from './plugins/top-nav-bar/index'
import './styles/globals.css'

createTheme()
  .use(topNavBar)
  .use(leftSidebar)
  .use(pagination)
  .use(footer)
  .use(backToTop)
  .use(smoothScroll)
