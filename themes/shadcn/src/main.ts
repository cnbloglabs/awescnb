import { createTheme } from '@acnb/core'
import './styles/globals.css'
import { app } from './plugins/app'
import { smoothScroll } from './plugins/smooth-scroll'

createTheme().use(app).use(smoothScroll)
