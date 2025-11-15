import { createTheme } from 'tona'
import './styles/globals.css'
import { app } from './plugins/app'
import { smoothScroll } from './plugins/smooth-scroll'

createTheme().use(app).use(smoothScroll)
