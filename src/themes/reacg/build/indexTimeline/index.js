import { pageName, throttle } from '@tools'
const { enable } = window.opts.indexTimeline

function layout() {
    $('.day .postTitle:even').addClass('custom-postTitle-even')
    $('.day .postTitle:odd').addClass('custom-postTitle-odd')
    $('.day .postCon:even').addClass('custom-postCon-even')
    $('.day .postCon:odd').addClass('custom-postCon-odd')
    $('.day .postDesc:even').addClass('custom-postDesc-even')
    $('.day .postDesc:odd').addClass('custom-postDesc-odd')
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect()
    return rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
}

function scroll() {
    var items = document.querySelectorAll('.day .postTitle')
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add('in-view')
                console.log(1213)
            }
        }
    }

    window.addEventListener('load', throttle(callbackFunc, 1000/60))
    window.addEventListener('resize', throttle(callbackFunc, 1000/60))
    window.addEventListener('scroll', throttle(callbackFunc, 1000/60))
}

function indexTimeline() {
    if (pageName() === 'index' && enable) {
        require('./index.scss')
        layout()
        scroll()
    } else {
        require('./classic.scss')
    }
}

export default indexTimeline
