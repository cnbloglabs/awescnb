import { userAgent, pageName, getClientRect } from '@tools'
import { getRandomFoodicons, iconInSvg } from '../tools'
import { catalogConfig } from '@config/plugins'

const options = catalogConfig()

// 设置随笔目录
function build() {
    const $parentEle = $($('#cnblogs_post_body'))
    const $catalogContainer = $('<div>')
    const $ulContainer = $('<ul>')
    const titleReg = /^h[1-3]$/
    $catalogContainer
        .attr('id', 'catalog')
        .append(
            $(
                `<div id='catalog-title'><h3>目录</h3></div>`,
            ),
        )
    $parentEle.children().each(function() {
        if (titleReg.test(this.tagName.toLowerCase())) {
            $(this).append(
                "<a href='#catalog' class='title_back'></a>",
            )
            let aEle = $('<a></a>')
            let hEle = $('<li></li>')
            aEle.attr('href', '#' + this.id).text(
                this.childNodes[0].nodeValue,
            )
            hEle.attr(
                'class',
                this.nodeName.toLowerCase() + '-list',
            ).append(aEle)
            $ulContainer.append(hEle)
        }
    })
    $($catalogContainer.append($ulContainer)).appendTo(
        'body',
    )
    // 给h1标题添加icon
    $('#cnblogs_post_body:first>h1').each(function() {
        const icon = getRandomFoodicons()
        $(this).prepend(iconInSvg(icon))
    })
}

// 设置活跃目录标题
function active() {
    var p = 0,
        t = 0
    $(window).scroll(function() {
        p = $(this).scrollTop()
        if (t <= p) {
            // 向下滚动
            $('#catalog ul li').each(function() {
                const titleId = $(this)
                    .find('a')
                    .attr('href')
                    .replace(/[#]/g, '')
                const postTitle = document.querySelector(
                    `#cnblogs_post_body [id='${titleId}']`,
                )
                if (getClientRect(postTitle).top <= 50) {
                    $(this).addClass('catalog-active')
                    $(this)
                        .siblings()
                        .removeClass('catalog-active')
                    return
                }
            })
        } else {
            for (
                let i = $('#catalog ul li').length - 1;
                i >= 0;
                i--
            ) {
                const titleId = $($('#catalog ul li')[i])
                    .find('a')
                    .attr('href')
                    .replace(/[#]/g, '')
                const postTitle = document.querySelector(
                    `#cnblogs_post_body [id='${titleId}']`,
                )
                if (getClientRect(postTitle).bottom <= 50) {
                    $($('#catalog ul li')[i]).addClass(
                        'catalog-active',
                    )
                    $($('#catalog ul li')[i])
                        .siblings()
                        .removeClass('catalog-active')
                    return
                }
            }
        }
        setTimeout(function() {
            t = p
        }, 0)
    })
}

// 随笔页目录显示隐藏
function toggle() {
    $(window).scroll(function() {
        $(window).scrollTop() > 300
            ? $('#catalog').show()
            : $('#catalog').hide()
    })
}

function catalog() {
    if (!options.enable) return
    if (userAgent() !== 'pc') return
    if (pageName() !== 'post') return
    build()
    active()
    toggle()
}

export default catalog
