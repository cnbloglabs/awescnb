import { loadScript } from 'utils/helpers'
import { isPostDetailsPage } from 'utils/cnblog'
import { fancybox } from '../../urls'

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
    if (!isPostDetailsPage()) return
    loadScript(fancybox, build)
}

export default fancyImgbox
