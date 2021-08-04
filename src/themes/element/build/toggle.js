export default () => {
    // 侧边导航目录
    jQuery(function($) {
        $(document).ready(function() {
            // eslint-disable-next-line no-unused-vars
            var contentButton = []
            var contentTop = []
            var content = []
            var lastScrollTop = 0
            var scrollDir = ''
            var itemClass = ''
            var itemHover = ''
            var menuSize = null
            var stickyHeight = 0
            var stickyMarginB = 0
            var currentMarginT = 0
            var topMargin = 0
            var vartop = 0
            $(window).scroll(function() {
                var st = $(this).scrollTop()
                if (st > lastScrollTop) {
                    scrollDir = 'down'
                } else {
                    scrollDir = 'up'
                }
                lastScrollTop = st
            })
            $.fn.stickUp = function(options) {
                $(this).addClass('stuckMenu')
                var objn = 0
                if (options != null) {
                    for (var o in options.parts) {
                        // eslint-disable-next-line no-prototype-builtins
                        if (options.parts.hasOwnProperty(o)) {
                            content[objn] = options.parts[objn]
                            objn++
                        }
                    }
                    if (objn == 0) {
                        console.log('error:needs arguments')
                    }
                    itemClass = options.itemClass
                    itemHover = options.itemHover
                    if (options.topMargin != null) {
                        if (options.topMargin == 'auto') {
                            topMargin =
                                parseInt($('.stuckMenu').css('margin-top')) + 0
                        } else {
                            if (
                                isNaN(options.topMargin) &&
                                options.topMargin.search('px') > 0
                            ) {
                                topMargin = parseInt(
                                    options.topMargin.replace('px', ''),
                                )
                            } else if (!isNaN(parseInt(options.topMargin))) {
                                topMargin = parseInt(options.topMargin)
                            } else {
                                console.log('incorrect argument, ignored.')
                                topMargin = 0
                            }
                        }
                    } else {
                        topMargin = 0
                    }
                    menuSize = $('.' + itemClass).size()
                }
                stickyHeight = parseInt($(this).height())
                stickyMarginB = parseInt($(this).css('margin-bottom'))
                currentMarginT = parseInt(
                    $(this)
                        .next()
                        .closest('div')
                        .css('margin-top'),
                )
                vartop = parseInt($(this).offset().top)
            }
            $(document).on('scroll', function() {
                // eslint-disable-next-line no-undef
                const varscroll = parseInt($(document).scrollTop())

                function bottomView(i) {
                    const contentView = $('#' + content[i] + '').height() * 0.4
                    const testView = contentTop[i] - contentView
                    if (varscroll > testView) {
                        $('.' + itemClass).removeClass(itemHover)
                        $('.' + itemClass + ':eq(' + i + ')').addClass(
                            itemHover,
                        )
                    } else if (varscroll < 50) {
                        $('.' + itemClass).removeClass(itemHover)
                        $('.' + itemClass + ':eq(0)').addClass(itemHover)
                    }
                }
                if (menuSize != null) {
                    for (var i = 0; i < menuSize; i++) {
                        contentTop[i] = $('#' + content[i] + '').offset().top

                        if (
                            scrollDir == 'down' &&
                            varscroll > contentTop[i] - 50 &&
                            varscroll < contentTop[i] + 50
                        ) {
                            $('.' + itemClass).removeClass(itemHover)
                            $('.' + itemClass + ':eq(' + i + ')').addClass(
                                itemHover,
                            )
                        }
                        if (scrollDir == 'up') {
                            bottomView(i)
                        }
                    }
                }
                if (vartop < varscroll + topMargin) {
                    $('.stuckMenu').addClass('isStuck')
                    $('.stuckMenu')
                        .next()
                        .closest('div')
                        .css(
                            {
                                'margin-top':
                                    stickyHeight +
                                    stickyMarginB +
                                    currentMarginT +
                                    'px',
                            },
                            10,
                        )
                    $('.stuckMenu').css('position', 'fixed')
                    $('.isStuck').css(
                        {
                            top: '0px',
                        },
                        10,
                        function() {},
                    )
                } else {
                    $('.stuckMenu').removeClass('isStuck')
                    $('.stuckMenu')
                        .next()
                        .closest('div')
                        .css(
                            {
                                'margin-top': currentMarginT + 'px',
                            },
                            10,
                        )
                    $('.stuckMenu').css('position', 'relative')
                }
            })
        })
    })

    /* ========================================================================
     * Bootstrap: scrollspy.js v3.3.5
     * http://getbootstrap.com/javascript/#scrollspy
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    ;+(function($) {
        'use strict'

        // SCROLLSPY CLASS DEFINITION
        // ==========================

        function ScrollSpy(element, options) {
            this.$body = $(document.body)
            this.$scrollElement = $(element).is(document.body)
                ? $(window)
                : $(element)
            this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
            this.selector = (this.options.target || '') + ' .nav li > a'
            this.offsets = []
            this.targets = []
            this.activeTarget = null
            this.scrollHeight = 0

            this.$scrollElement.on(
                'scroll.bs.scrollspy',
                $.proxy(this.process, this),
            )
            this.refresh()
            this.process()
        }

        ScrollSpy.VERSION = '3.3.5'

        ScrollSpy.DEFAULTS = {
            offset: 10,
        }

        ScrollSpy.prototype.getScrollHeight = function() {
            return (
                this.$scrollElement[0].scrollHeight ||
                Math.max(
                    this.$body[0].scrollHeight,
                    document.documentElement.scrollHeight,
                )
            )
        }

        ScrollSpy.prototype.refresh = function() {
            var that = this
            var offsetMethod = 'offset'
            var offsetBase = 0

            this.offsets = []
            this.targets = []
            this.scrollHeight = this.getScrollHeight()

            if (!$.isWindow(this.$scrollElement[0])) {
                offsetMethod = 'position'
                offsetBase = this.$scrollElement.scrollTop()
            }

            this.$body
                .find(this.selector)
                .map(function() {
                    var $el = $(this)
                    var href = $el.data('target') || $el.attr('href')
                    var $href = /^#./.test(href) && $(href)

                    return (
                        ($href &&
                            $href.length &&
                            $href.is(':visible') && [
                                [$href[offsetMethod]().top + offsetBase, href],
                            ]) ||
                        null
                    )
                })
                .sort(function(a, b) {
                    return a[0] - b[0]
                })
                .each(function() {
                    that.offsets.push(this[0])
                    that.targets.push(this[1])
                })
        }

        ScrollSpy.prototype.process = function() {
            var scrollTop =
                this.$scrollElement.scrollTop() + this.options.offset
            var scrollHeight = this.getScrollHeight()
            var maxScroll =
                this.options.offset +
                scrollHeight -
                this.$scrollElement.height()
            var offsets = this.offsets
            var targets = this.targets
            var activeTarget = this.activeTarget
            var i

            if (this.scrollHeight != scrollHeight) {
                this.refresh()
            }

            if (scrollTop >= maxScroll) {
                return (
                    activeTarget != (i = targets[targets.length - 1]) &&
                    this.activate(i)
                )
            }

            if (activeTarget && scrollTop < offsets[0]) {
                this.activeTarget = null
                return this.clear()
            }

            for (i = offsets.length; i--; ) {
                activeTarget != targets[i] &&
                    scrollTop >= offsets[i] &&
                    (offsets[i + 1] === undefined ||
                        scrollTop < offsets[i + 1]) &&
                    this.activate(targets[i])
            }
        }

        ScrollSpy.prototype.activate = function(target) {
            this.activeTarget = target

            this.clear()

            var selector =
                this.selector +
                '[data-target="' +
                target +
                '"],' +
                this.selector +
                '[href="' +
                target +
                '"]'

            var active = $(selector)
                .parents('li')
                .addClass('active')

            if (active.parent('.dropdown-menu').length) {
                active = active.closest('li.dropdown').addClass('active')
            }

            active.trigger('activate.bs.scrollspy')
        }

        ScrollSpy.prototype.clear = function() {
            $(this.selector)
                .parentsUntil(this.options.target, '.active')
                .removeClass('active')
        }

        // SCROLLSPY PLUGIN DEFINITION
        // ===========================

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this)
                var data = $this.data('bs.scrollspy')
                var options = typeof option == 'object' && option

                if (!data)
                    $this.data(
                        'bs.scrollspy',
                        (data = new ScrollSpy(this, options)),
                    )
                if (typeof option == 'string') data[option]()
            })
        }

        var old = $.fn.scrollspy

        $.fn.scrollspy = Plugin
        $.fn.scrollspy.Constructor = ScrollSpy

        // SCROLLSPY NO CONFLICT
        // =====================

        $.fn.scrollspy.noConflict = function() {
            $.fn.scrollspy = old
            return this
        }

        // SCROLLSPY DATA-API
        // ==================

        $(window).on('load.bs.scrollspy.data-api', function() {
            $('[data-spy="scroll"]').each(function() {
                var $spy = $(this)
                Plugin.call($spy, $spy.data())
            })
        })
    })(jQuery)

    window.toHeader = () => {
        $('html,body')
            .finish()
            .animate(
                {
                    scrollTop: '0px',
                },
                500,
            )
    }

    window.toggleSidebar = () => {
        $('#sideBarMain').toggleClass('sidebar-show')
        //$('.float-btn li:not(.btn-sidebar)').toggle();
        //$('#sideBarMain>div:not(#sidebar_scroller)').show();
        //$('#sidebar_scroller').hide();
        $('.btn-sidebar').toggleClass('btn-sidebar-open')
    }

    window.toggleMain = () => {
        $('#main').toggleClass('main-hide')
        $('.btn-main').toggleClass('btn-main-open')
        if ($('.btn-content').length > 0) {
            $('.btn-content').toggle()
        }
    }

    window.toggleContent = () => {
        $('#sidebar_scroller').toggle()
        //$('#sideBarMain').toggleClass('sidebar-show');
        $('#sideBarMain>*:not(#sidebar_scroller)').toggle()
        $('.btn-content').toggleClass('btn-content-open')
    }

    // 侧边悬浮按钮
    $('#home').append(
        '<div class="float-btn"><ul>' +
            '<li class="btn-top"><a href="javascript:toHeader()"></a></li>' +
            '<li class="btn-main"><a href="javascript:toggleMain()"></a></li>' +
            '<li class="btn-sidebar"><a href="javascript:toggleSidebar()"></a></li>' +
            '</ul></div>',
    )

    $('#sideBarMain').toggleClass('sidebar-hide')

    // 侧边目录
    if ($('#topics').length > 0) {
        //先获取第一个h标签, 之后循环时作为上一个h标签
        var $ph = $('#cnblogs_post_body :header:eq(0)')
        if ($ph.length > 0) {
            $('.btn-comment').after(
                '<li class="btn-content"><a href="javascript:toggleContent()"></a></li>',
            )
            $('.btn-content').hide()
            //     $('#sideBarMain').remove();
            //设置层级为1
            $ph.attr('offset', '1')
            //添加导航目录的内容
            $('#sideBarMain').prepend(
                '<div id="sidebar_scroller" class="sidebar-block"><h3 class="catListTitle">导航目录</h3><ul class="nav"></ul></div>',
            )
            //取当前边栏的宽度
            //$('#sidebar_scroller').css('width', ($('#sideBarMain').width()) + 'px');
            //让导航目录停留在页面顶端
            //  $('#sidebar_scroller').stickUp();
            //遍历文章里每个h标签
            $('#cnblogs_post_body :header').each(function(i) {
                var $h = $(this)
                //设置h标签的id, 编号从0开始
                $h.attr('id', 'scroller-' + i)
                //比上一个h标签层级小, 级数加1
                if ($h[0].tagName > $ph[0].tagName) {
                    $h.attr('offset', parseInt($ph.attr('offset')) + 1)
                } //比上一个h标签层级大, 级数减1
                else if ($h[0].tagName < $ph[0].tagName) {
                    var h = parseInt($h[0].tagName.substring(1))
                    var ph = parseInt($ph[0].tagName.substring(1))

                    var offset = parseInt($ph.attr('offset')) - (ph - h)
                    if (offset < 1) {
                        offset = 1
                    }
                    $h.attr('offset', offset)
                } //和上一个h标签层级相等时, 级数不变
                else {
                    $h.attr('offset', $ph.attr('offset'))
                }
                //添加h标签的目录内容
                $('#sidebar_scroller ul').append(
                    '<li class="scroller-offset' +
                        $h.attr('offset') +
                        '"><a href="#scroller-' +
                        i +
                        '">' +
                        $h.text() +
                        '</a></li>',
                )
                //最后设置自己为上一个h标签
                $ph = $h
            })

            //开启滚动监听, 监听所有在.nav类下的li
            $('body').scrollspy()

            //  侧边
            $(document).ajaxComplete(function(event, xhr, option) {
                if (option.url.indexOf('TopLists') > -1) {
                    setTimeout(function() {
                        $('#sidebar_scroller').toggle()
                        window.toggleContent()
                        window.toggleMain()
                    }, 300)
                }
            })

            /*当前目录激活监听*/
            $(window).scroll(function() {
                var now = $('#sidebar_scroller').find('.active')
                var prevNum = now.prevAll().length + 1
                var basicHeight = now.outerHeight()
                $('.nav').scrollTop(prevNum * basicHeight - 14)
            })
        }
    }

    $('.nav a').click(function() {
        var w = document.body.clientWidth
        if (w <= 1200) {
            $('#sideBarMain').toggleClass('sidebar-show')
            window.toggleMain()
            $('.btn-sidebar').toggleClass('btn-sidebar-open')
        }
    })

    //侧边固定
    $(document).scroll(function() {
        var $top = parseInt($(window).scrollTop()) + $(window).height()
        var sideBarHeight = $('#sideBarMain').outerHeight()
        var mainContentHeight = $('#mainContent').outerHeight()
        if (mainContentHeight > sideBarHeight) {
            if ($top >= sideBarHeight && $top < mainContentHeight) {
                $('#sideBarMain').addClass('sidebar-fixed')
            } else {
                $('#sideBarMain').removeClass('sidebar-fixed')
            }
        }

        if ($(window).scrollTop() < $('#header').outerHeight()) {
            $('#sideBarMain').removeClass('sidebar-fixed')
            $('.btn-top').fadeOut()
        } else {
            $('.btn-top').fadeIn()
        }
    })

    $('.nav-open').click(function() {
        $('#navigator').slideToggle()
    })
}
