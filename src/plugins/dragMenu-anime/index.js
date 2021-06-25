import toast from 'plugins/toast'
import { toolsConfig } from 'options/plugins'

import {
    // jqueryui,
    animeJs,
} from 'constants/libs'
import { loadScript, userAgent } from 'utils/helpers'
import { getCurrentPage } from 'utils/cnblog'

let anime
let timeOut
// dbclick timer
let timer = null

class Menu {
    constructor(menu) {
        this.$element = $(menu)
        this.size = 0
        this.first = null
        this.last = null
        this.timeOut = null
        this.hasMoved = false
        this.status = 'closed'
    }

    add(item) {
        var menu = this
        if (this.first == null) {
            this.first = item
            this.last = item
            this.first.$element.on('mouseup', function() {
                if (menu.first.isMoving) {
                    menu.first.isMoving = false
                } else {
                    menu.click()
                }
            })
            // if (draggable) {
            //     loadScript(jqueryui, () => {
            //         item.$element.draggable(
            //             {
            //                 start() {
            //                     menu.close()
            //                     item.isMoving = true
            //                 },
            //             },
            //             {
            //                 drag() {
            //                     if (item.next) {
            //                         item.next.updatePosition()
            //                     }
            //                 },
            //             },
            //             {
            //                 stop() {
            //                     item.isMoving = false
            //                     item.next.moveTo(item)
            //                 },
            //             },
            //         )
            //     })
            // }
        } else {
            this.last.next = item
            item.prev = this.last
            this.last = item
        }
        this.$element.after(item.$element)
    }

    open() {
        this.status = 'open'
        var current = this.first.next
        var iterator = 1
        var head = this.first
        var sens =
            head.$element.css('bottom') < head.$element.css('right') ? 1 : -1
        while (current != null) {
            anime({
                targets: current.$element[0],
                bottom: -(
                    parseInt(head.$element.css('bottom'), 10) +
                    sens * (iterator * 50)
                ),
                left: head.$element.css('left'),
                duration: 500,
            })
            iterator++
            current = current.next
        }
    }

    close() {
        this.status = 'closed'
        var current = this.first.next
        var head = this.first
        // var iterator = 1
        while (current != null) {
            anime({
                targets: current.$element[0],
                bottom: head.$element.css('bottom'),
                left: head.$element.css('left'),
                duration: 500,
            })
            // iterator++
            current = current.next
        }
    }

    click() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            if (this.status === 'closed') {
                this.open()
            } else {
                this.close()
            }
        }, 300)
    }
}

class Item {
    constructor(
        icon,
        tip = '',
        event = 'click',
        callback = function() {},
        className,
    ) {
        this.$element = $(document.createElement('div'))
        this.$element.addClass('dragmenu-item')
        if (className) {
            this.$element.addClass(className)
        }
        var i = document.createElement('i')
        var tooltip = document.createElement('span')
        $(tooltip).addClass('dragmenu-item-tooltip')
        this.$element.on(event, callback)
        // 使用字体图标（length>2）或者使用文本图标
        icon.length > 2 ? $(i).addClass(icon) : $(i).html(icon)
        $(tooltip).html(tip)
        this.$element.append(i)
        this.$element.append(tooltip)
        this.prev = null
        this.next = null
        this.isMoving = false
        var element = this
        this.$element.on('mousemove', function() {
            clearTimeout(timeOut)
            timeOut = setTimeout(function() {
                if (element.next && element.isMoving) {
                    element.next.moveTo(element)
                }
            }, 10)
        })
    }

    moveTo(item) {
        anime({
            targets: this.$element[0],
            bottom: item.$element.css('bottom'),
            left: item.$element.css('left'),
            duration: 700,
            elasticity: 500,
        })
        if (this.next) {
            this.next.moveTo(item)
        }
    }

    updatePosition() {
        anime({
            targets: this.$element[0],
            bottom: this.prev.$element.css('bottom'),
            left: this.prev.$element.css('left'),
            duration: 80,
        })

        if (this.next) {
            this.next.updatePosition()
        }
    }
}

// 生成一个 dragmenu
function create(options, initialOpen) {
    const ele = `<div class="custom-drag-menu"><div id="myMenu"></div></div>`
    $('body').append(ele)

    const menu = new Menu('#myMenu')

    for (const {
        page,
        icon,
        tooltip,
        evenType,
        callback,
        className,
    } of options.items) {
        if (getCurrentPage() === page || page === 'all') {
            menu.add(new Item(icon, tooltip, evenType, callback, className))
        }
    }

    $(document)
        .delay(50)
        .queue(function(next) {
            menu.open()
            next()

            // 移动端自动收起
            if (userAgent() === 'phone' && options.mobileAutoClose) {
                $(document)
                    .delay(1000)
                    .queue(function(next) {
                        menu.close()
                        next()
                    })
            }

            if (initialOpen) return
            $(document)
                .delay(1000)
                .queue(function(next) {
                    menu.close()
                    next()
                })
        })
}

function dragMenu(theme, devOptions, pluginOptions = {}) {
    const {
        enable,
        initialOpen,
        //  draggable
    } = toolsConfig(devOptions)
    if (!enable) return

    // 返回顶部
    const back2top = () => {
        clearTimeout(timer)
        $('html, body, #mainContent').animate(
            {
                scrollTop: 0,
            },
            200,
        )
    }

    // 关注
    const focus = () => {
        toast('感谢关注🍺')
        window.follow()
    }

    // 推荐
    const diggit = () => {
        toast('推荐成功')
        const id = window.location.href.match(/p\/(\S*).html/)[1]
        window.votePost(parseInt(id), 'Digg')
    }

    // 跳转到评论输入框
    const comment = () => {
        $('html, body, #mainContent').animate(
            {
                scrollTop: $('.commentbox_main').offset().top,
                // scrollTop:
                //     $('.commentbox_main').offset().top -
                //     $('.commentbox_main').height(),
            },
            300,
        )
        toast('跳转成功')
    }

    // 收藏
    const collect = () => {
        toast('欢迎收藏🍺')
        window.AddToWz()
    }

    const extraOptions = {
        mobileAutoClose: true,
        items: [
            {
                page: 'all',
                icon: '🚀',
                tooltip: '双击',
                evenType: 'dblclick',
                callback: back2top,
            },
            {
                page: 'post',
                icon: '💬',
                tooltip: '评论',
                evenType: 'click',
                callback: comment,
            },
            {
                page: 'post',
                icon: '📌',
                tooltip: '收藏',
                evenType: 'click',
                callback: collect,
            },
            {
                page: 'post',
                icon: '💗',
                tooltip: '关注',
                evenType: 'click',
                callback: focus,
            },
            {
                page: 'post',
                icon: '👍',
                tooltip: '推荐',
                evenType: 'click',
                callback: diggit,
            },
        ],
    }

    $.extend(true, extraOptions, pluginOptions)

    loadScript(animeJs, () => {
        anime = window.anime
        create(extraOptions, initialOpen)
    })
}

export default dragMenu
