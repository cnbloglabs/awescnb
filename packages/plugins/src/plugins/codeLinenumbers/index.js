// 构建代码行号
import { useCodeLangOptions } from '@acnb/options'
import { isMd, isPostDetailsPage } from '../../utils/cnblog'

/**
 * 构建代码行号
 */
function buildLinenumbers() {
  $('pre code').each(function () {
    const linenumberContainer = $('<ul/>').addClass('awes-linenumber')
    const lines = $(this).text().split('\n').length - 1

    for (let i = 1; i <= lines; i++) {
      linenumberContainer.append($('<li/>').text(i))
    }

    $(this).before(linenumberContainer)
  })
}

export function codeLinenumbers(theme, devOptions) {
  const { enable } = useCodeLangOptions(devOptions)
  if (!isPostDetailsPage) {
    return
  }
  if (!enable) {
    return
  }
  if (!isMd()) {
    return
  }
  buildLinenumbers()
}
