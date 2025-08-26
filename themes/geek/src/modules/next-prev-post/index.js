import { isPostDetailsPage } from '../../utils/cnblog'
import { poll } from '../../utils/helpers'
import './index.scss'

function buildNextPrevPost() {
  if (!isPostDetailsPage) {
    return
  }
  const a = $('#post_next_prev>a')

  if (!a.length) {
    return
  }

  const getData = (order) => {
    return {
      title: a.eq(order).text(),
      url: a.eq(order).attr('href'),
      desc: a.eq(order).attr('title'),
    }
  }

  const elements = (() => {
    const wrap = $('<div>').addClass('custom-next-prev-post')
    const createElements = (data, type) => {
      const typeMap = ({
        prev: {
          className: 'prev-post',
          extraText: '上一篇',
          icon: 'fa-arrow-left',
        },
        next: {
          className: 'next-post',
          extraText: '下一篇',
          icon: 'fa-arrow-right',
        },
      })[type]

      return (
        $('<div>')
          .addClass(typeMap.className)
          .append(
            $('<a>').append(
              $('<span>').text(typeMap.extraText),
              $('<span>').text(data.title),
              $('<li>').addClass(`fas ${typeMap.icon}`),
            ).attr('href', data.url),
          )
      )
    }

    wrap.append(createElements(getData(1), 'prev'))
    if (a.length === 4) {
      wrap.append(createElements(getData(3), 'next'))
    }

    return wrap
  })()

  $('#cnblogs_post_body').after(elements)
}

export function install() {
  poll(() => $('#post_next_prev>a').length, buildNextPrevPost)
}
