import { pageName, cacheScript } from '@tools'
import { fancybox } from '../../constants/urls'

function build() {
    // fancybox
    $('.cnblogs-markdown img').each(function() {
        var element = document.createElement('a')
        $(element).attr('data-fancybox', 'gallery')
        $(element).attr('href', $(this).attr('src'))
        $(this).wrap(element)
    })
}

function fancyImgbox() {
    if (pageName() !== 'post') return
    cacheScript(fancybox, build)
}

export default fancyImgbox
