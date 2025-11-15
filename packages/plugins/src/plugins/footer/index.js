import { getLinksOptions } from 'tona-options'

/**
 * 构建 copyright
 */
function buildCopyright() {
  const nickName = $('#profile_block a:first').text().trim()

  const el = `<div id='copyright'>
                    <span>Copyright © ${new Date().getFullYear()} ${nickName}</span>
                    <span> Powered by you 🌊 Theme in ${'tona'.link('#')}</span>
                </div>`

  $('#footer').empty().append(el)
}

/**
 * 构建自定义链接
 */
function buildCustomLinks(devOptions) {
  const config = getLinksOptions(devOptions)

  if (config.links.length) {
    const $links = $('<ul id="links"></ul>')
    for (const { title, url } of config.links) {
      $links.append(`<li><a href='${url}'>${title}</a></li>`)
    }
    $('#footer').prepend($links.prop('outerHTML'))
  }
}

export function footer(_, devOptions) {
  buildCopyright()
  buildCustomLinks(devOptions)
}
