import { pageName } from '@tools'
import './index.scss'

const build = () => {
    if (pageName() === 'index') $('.forFlow').addClass('index')
    const ele = $('.day').find('.postTitle,.postCon,.postDesc')

    for (var i = 0; i < ele.length; i += 3) {
        const card = `
      <div class='custom-card'>
          ${$(ele.slice(i, i + 3)[0]).prop('outerHTML')}
          ${$(ele.slice(i, i + 3)[1]).prop('outerHTML')}
          ${$(ele.slice(i, i + 3)[2]).prop('outerHTML')}
      </div>
      `
        $('.custom-card').length
            ? $('.custom-card:last').after(card)
            : $('.forFlow').prepend(card)

        // $('.day').remove()
    }
}

const indexCards = () => {
    build()
}

module.exports = indexCards
