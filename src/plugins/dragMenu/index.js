import './index.css'
import anime from 'animejs/lib/anime.es.js'
import toast from '@plugins/toast'
import { pageName } from '@tools'
// import { cacheScript } from '@tools'
// import { jqueryui } from '@constants/urls'

var timeOut
// db timer
var timer = null
// 创建子项
class Item {
    constructor(
        content,
        backgroundColor,
        event = 'click',
        callback = function() {},
    ) {
        this.$element = $(document.createElement('div'))
        // this.icon = icon
        this.$element.addClass('dragmenu-item')
        this.$element.css('background-color', backgroundColor)
        var i = document.createElement('i')
        // $(i).addClass('fi-' + icon)
        this.$element.on(event, callback)
        $(i).html(content)
        this.$element.append(i)
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
            // item.$element.draggable(
            //     {
            //         start: function() {
            //             menu.close()
            //             item.isMoving = true
            //         },
            //     },
            //     {
            //         drag: function() {
            //             if (item.next) {
            //                 item.next.updatePosition()
            //             }
            //         },
            //     },
            //     {
            //         stop: function() {
            //             item.isMoving = false
            //             item.next.moveTo(item)
            //         },
            //     },
            // )
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
        var iterator = 1
        console.log(iterator)
        while (current != null) {
            anime({
                targets: current.$element[0],
                left: head.$element.css('left'),
                top: head.$element.css('top'),
                duration: 500,
            })
            iterator++
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

// 生成一个dragmenu
function create() {
    const ele = `<div class="custom-drag-menu"><div id="myMenu"></div></div>`
    $('body').append(ele)

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
        window.follow()
    }

    // 推荐
    const diggit = () => {
        toast('谢谢推荐🍺')
        window.DiggIt()
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

    var menu = new Menu('#myMenu')

    var item1 = new Item('🚀', '#48dbfb', 'dblclick', back2top)
    menu.add(item1)
    var item3 = new Item('❤', '#feca57', 'click', focus)
    menu.add(item3)
    if (pageName() === 'post') {
        var item2 = new Item('👍', '#ff6b6b', 'click', diggit)
        menu.add(item2)
        var item4 = new Item('💬', '#10ac84', 'click', comment)
        menu.add(item4)
        var item5 = new Item('💼', '#54a0ff', 'click', collect)
        menu.add(item5)
    }

    $(document)
        .delay(50)
        .queue(function(next) {
            menu.open()
            next()
            $(document)
                .delay(1000)
                .queue(function(next) {
                    menu.close()
                    next()
                })
        })
}

function dragMenu() {
    if (
        $('#profile_block>a:nth-child(1)')
            .text()
            .trim() === '李玉宝'
    )
        return
    create()
    // cacheScript(jqueryui, create)
}

export default dragMenu
