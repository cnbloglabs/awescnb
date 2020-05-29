import './index.scss'
import anime from 'animejs/lib/anime.es.js'
import toast from '@plugins/toast'
import { pageName, cacheScript, userAgent } from '@tools'
import { jqueryui } from '@constants/urls'

const back2topConfig = window.opts.back2top
const { enable, initialOpen, draggable } = window.opts.tools
var timeOut
// db timer
var timer = null

// 返回顶部
const back2top = () => {
    clearTimeout(timer)
    $('html, body').animate(
        {
            scrollTop: 0,
        },
        300,
    )
}

// 关注
const focus = () => {
    toast('谢谢关注🍺')
    window.follow()()
}

// 推荐
const diggit = () => {
    toast('谢谢推荐🍺')
    const id = window.location.href.match(/p\/(\S*).html/)[1]
    window.votePost(parseInt(id), 'Digg')
}

// 评论
const comment = () => {
    toast('谢谢评论🍺')
    $('html, body').animate(
        {
            scrollTop:
                $('.commentbox_main').offset().top -
                $('.commentbox_main').height(),
        },
        300,
    )
}

// 收藏
const collect = () => {
    toast('谢谢收藏🍺')
    window.AddToWz()
}

// 创建容器
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
            if (draggable) {
                cacheScript(jqueryui, () => {
                    item.$element.draggable(
                        {
                            start: function() {
                                menu.close()
                                item.isMoving = true
                            },
                        },
                        {
                            drag: function() {
                                if (item.next) {
                                    item.next.updatePosition()
                                }
                            },
                        },
                        {
                            stop: function() {
                                item.isMoving = false
                                item.next.moveTo(item)
                            },
                        },
                    )
                })
            }
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
            head.$element.css('left') < head.$element.css('right') ? 1 : -1
        while (current != null) {
            anime({
                targets: current.$element[0],
                left:
                    parseInt(head.$element.css('left'), 10) +
                    sens * (iterator * 50),
                top: head.$element.css('top'),
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
        // console.log(iterator)
        while (current != null) {
            anime({
                targets: current.$element[0],
                left: head.$element.css('left'),
                top: head.$element.css('top'),
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
        backgroundColor,
        event = 'click',
        callback = function() {},
        tip = '',
    ) {
        this.$element = $(document.createElement('div'))
        this.$element.addClass('dragmenu-item')
        this.$element.css('background-color', backgroundColor)
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
            left: item.$element.css('left'),
            top: item.$element.css('top'),
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
            left: this.prev.$element.css('left'),
            top: this.prev.$element.css('top'),
            duration: 80,
        })

        if (this.next) {
            this.next.updatePosition()
        }
    }
}

// 生成一个dragmenu
function create(options) {
    const ele = `<div class="custom-drag-menu"><div id="myMenu"></div></div>`
    $('body').append(ele)

    var menu = new Menu('#myMenu')

    for (const {
        page,
        icon,
        backgroundColor,
        tooltip,
        evenType,
        callback,
    } of options.items) {
        // if (pageName() !== page) continue
        if (pageName() === page || page === 'all') {
            menu.add(
                new Item(icon, backgroundColor, evenType, callback, tooltip),
            )
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

function dragMenu(options) {
    if (!back2topConfig.enable) return
    if (!enable) return
    const defaultOptions = {
        mobileAutoClose: true,
        items: [
            {
                page: 'all',
                icon: '🚀',
                backgroundColor: '#c8d6e5',
                tooltip: '双击',
                evenType: 'dblclick',
                callback: back2top,
            },
            {
                page: 'post',
                icon: '💗',
                backgroundColor: '#fdcb6e',
                tooltip: '关注',
                evenType: 'click',
                callback: focus,
            },
            {
                page: 'post',
                icon: '👍',
                backgroundColor: '#ff6b6b',
                tooltip: '推荐',
                evenType: 'click',
                callback: diggit,
            },
            {
                page: 'post',
                icon: '💬',
                backgroundColor: '#10ac84',
                tooltip: '评论',
                evenType: 'click',
                callback: comment,
            },
            {
                page: 'post',
                icon: '📂',
                backgroundColor: '#01a3a4',
                tooltip: '收藏',
                evenType: 'click',
                callback: collect,
            },
        ],
    }

    if (options) $.extend(true, defaultOptions, options)
    create(defaultOptions)
}

export default dragMenu
