import { createTheme } from '@tona/core'
import {
  clickEffects,
  codeHighlight,
  codeLinenumbers,
  codeTrafficLight,
  darkMode,
  donation,
  emoji,
  license,
  tools,
} from '../src/index'
import './index.scss'

const theme = createTheme()

theme
  .use(clickEffects, { enable: true })
  .use(emoji, { enable: true })
  .use(license, { enable: true })
  .use(darkMode, { enable: true })
  .use(codeTrafficLight, { enable: true })
  .use(codeHighlight, { enable: true })
  .use(codeLinenumbers, { enable: true })
  .use(donation, {
    enable: true,
    qrcodes: [
      'https://www.cnblogs.com/images/logo.svg?v=R9M0WmLAIPVydmdzE2keuvnjl-bPR7_35oHqtiBzGsM',
    ],
  })
  .use(
    tools,
    { enable: true },
    {
      menuIconType: 'className',
      menuIcon: 'fa-angle-up',
      menuActiveIcon: 'fa-angle-down',
      scrollContainer: 'html',
      toolbarItems: [
        {
          icon: 'fa-rocket rocket-rotate',
          iconType: 'className',
        },
        {
          enable: true,
          icon: 'fa-moon',
          iconType: 'className',
        },
        {
          icon: 'fa-thumbs-up',
          iconType: 'className',
        },
        {
          icon: 'fa-heart',
          iconType: 'className',
        },
        {
          icon: 'fa-star',
          iconType: 'className',
        },
        {
          icon: 'fa-comment-dots',
          iconType: 'className',
        },
      ],
    },
  )
