import { createTheme } from '@acnb/core'
import './styles/globals.css'
import { preact } from './plugins/preact'
import { smoothScroll } from './plugins/smooth-scroll'

createTheme().use(preact).use(smoothScroll)
