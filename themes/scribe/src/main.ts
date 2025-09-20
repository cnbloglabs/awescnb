import { createTheme } from '@acnb/core'
import { backToTop } from './plugins/back-to-top'
import { blogStats } from './plugins/blog-stats'
import { footer } from './plugins/footer'
import { smoothScroll } from './plugins/smooth-scroll'
import { topNavBar } from './plugins/top-nav-bar/index'
import './styles/globals.css'

createTheme()
  .use(backToTop)
  .use(topNavBar)
  .use(blogStats)
  .use(smoothScroll)
  .use(footer)
