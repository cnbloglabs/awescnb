import { createTheme } from '@acnb/core';
import {
  background,
  catalog,
  charts,
  clickEffects,
  colorMode,
  commentsAvatars,
  darkMode,
  donation,
  emoji,
  imagePreview,
  license,
  live2d,
  lock,
  musicPlayer,
  notice,
  postBottomImage,
  postMessage,
  postTopImage,
  qrcode,
  signature,
  tools,
  webTag,
} from '@acnb/plugins';
import build from './build';
import './style/index.scss';

createTheme()
  .use(build)
  .use(colorMode, {
    enable: true,
    color: '#FB7299',
  })
  .use(tools, {
    enable: true,
  })
  .use(imagePreview, {
    enable: true,
  })
  .use(live2d, {
    enable: true,
  })
  .use(musicPlayer, {
    enable: true,
  })
  .use(clickEffects, {
    enable: true,
  })
  .use(webTag, {
    enable: false,
  })
  .use(commentsAvatars, {
    enable: true,
  })
  .use(signature, {
    enable: false,
  })
  .use(license, {
    enable: true,
  })
  .use(emoji, {
    enable: true,
  })
  .use(lock, {
    enable: false,
  })
  .use(postMessage, {
    enable: false,
  })
  .use(postTopImage, {
    enable: false,
  })
  .use(postBottomImage, {
    enable: false,
  })
  .use(qrcode, {
    enable: false,
  })
  .use(charts, {
    enable: false,
  })
  .use(donation, {
    enable: false,
  })
  .use(notice, {
    enable: true,
  })
  .use(darkMode, {
    enable: true,
  })
  .use(
    background,
    {
      enable: false,
    },
    {
      opacitySelector: '#navigator,#footer,#main',
    },
  )
  .use(
    catalog,
    {
      enable: true,
    },
    {
      mountedNode: '#main',
      fn: 'prepend',
    },
  );
