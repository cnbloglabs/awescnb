export const triggerDigg = () => {
  const diggElement = document.querySelector('.diggit') as HTMLElement
  if (diggElement) {
    diggElement.click()
  }
}

export const triggerBury = () => {
  const buryElement = document.querySelector('.buryit') as HTMLElement
  if (buryElement) {
    buryElement.click()
  }
}

export const triggerFollow = () => {
  const followElement = document.getElementById(
    'green_channel_follow',
  ) as HTMLElement
  if (followElement) {
    followElement.click()
  }
}

export const triggerFavorite = () => {
  const favoriteElement = document.getElementById(
    'green_channel_favorite',
  ) as HTMLElement
  if (favoriteElement) {
    favoriteElement.click()
  }
}

export const triggerWeiboShare = () => {
  const weiboElement = document.getElementById(
    'green_channel_weibo',
  ) as HTMLElement
  if (weiboElement) {
    weiboElement.click()
  }
}

export const triggerWechatShare = () => {
  const wechatElement = document.getElementById(
    'green_channel_wechat',
  ) as HTMLElement
  if (wechatElement) {
    wechatElement.click()
  }
}
