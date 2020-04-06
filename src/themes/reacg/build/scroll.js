import {
    pageName,
    userAgent,
    hasPostTitle,
    throttle,
    getClientRect,
} from '@/assets/utils/tools'

// 只触发一次向上或向下,如果又重新反向滚动则再触发一次
function scrollOnce() {
    function scrollFunc() {
        let scrollDirection
        if (!scrollAction) {
            scrollAction = window.pageYOffset
        }
        let diff = scrollAction - window.pageYOffset
        if (diff < 0) {
            scrollDirection = 'down'
        } else if (diff > 0) {
            scrollDirection = 'up'
        } else {
            // First scroll event
        }
        scrollAction = window.pageYOffset
        return scrollDirection
    }
    let scrollAction, originalDir

    $(window).scroll(function() {
        let direction = scrollFunc()
        if (direction && originalDir != direction) {
            if (direction == 'down') {
                $('#header').addClass('header-hide') // 头部导航隐藏
                $('#catalog').addClass('catalog-scroll-up') // 当头部导航隐藏目录随之向上移动
            } else {
                $('#header').removeClass('header-hide')
                $('#catalog').removeClass('catalog-scroll-up')
            }
            originalDir = direction
        }
    })
}

// 当sideBarMain滚动出屏幕就固定目录
function setCatalogToggle() {
    const options = window.opts.catalog

    if (!options.enable) return
    if (!hasPostTitle) return
    if (pageName() !== 'post') return
    if (userAgent() !== 'pc') return

    var p = 0,
        t = 0
    $(window).scroll(
        throttle(
            function() {
                const bottom = getClientRect(
                    document.querySelector('#sideBarMain'),
                ).bottom
                if (bottom <= 0) {
                    $('#catalog').addClass('catalog-sticky')
                    p = $(this).scrollTop()
                    t <= p
                        ? $('#catalog').addClass('catalog-scroll-up')
                        : $('#catalog').removeClass('catalog-scroll-up')
                    setTimeout(function() {
                        t = p
                    }, 0)
                } else {
                    $('#catalog').removeClass('catalog-sticky')
                }
            },
            50,
            1000 / 60,
        ),
    )
}

// 设置目录活跃标题样式
function setActiveCatalogTitle() {
    const options = window.opts.catalog

    if (!options.enable) return
    if (!hasPostTitle) return
    if (pageName() !== 'post') return
    if (userAgent() !== 'pc') return

    $(window).scroll(
        throttle(
            function() {
                for (let i = $('#catalog ul li').length - 1; i >= 0; i--) {
                    const titleId = $($('#catalog ul li')[i])
                        .find('a')
                        .attr('href')
                        .replace(/[#]/g, '')
                    const postTitle = document.querySelector(
                        `#cnblogs_post_body [id='${titleId}']`,
                    )
                    if (getClientRect(postTitle).top <= 10) {
                        if (
                            $($('#catalog ul li')[i]).hasClass('catalog-active')
                        )
                            return
                        $($('#catalog ul li')[i]).addClass('catalog-active')
                        $($('#catalog ul li')[i])
                            .siblings()
                            .removeClass('catalog-active')
                        return
                    }
                }
            },
            50,
            1000 / 60,
        ),
    )
}

function scroll() {
    scrollOnce()
    setCatalogToggle()
    setActiveCatalogTitle()
}

export default scroll
