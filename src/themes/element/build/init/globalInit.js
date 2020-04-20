// 平滑滚动控制
function myscroll() {
    $('a[href*=\\#],area[href*=\\#]').click(function() {
        if (
            location.pathname.replace(/^\//, '') ==
                this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var $target = $(this.hash)
            $target =
                ($target.length && $target) ||
                $('[name=' + this.hash.slice(1) + ']')
            if ($target.length) {
                var targetOffset = $target.offset().top
                $('html,body').animate(
                    {
                        scrollTop: targetOffset,
                    },
                    500,
                )
                return false
            }
        }
    })
}

//侧边固定
function sidePosition() {
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
        }
    })
}

// 其他未抽离的
function others() {
    // 运行脚本
    $('code.language-runCode').each(function() {
        window.eval($(this).text())
        $(this)
            .parent('pre')
            .remove()
    })

    $('#sideBarMain').toggleClass('sidebar-hide')

    $(function() {
        if (window.isLogined) {
            $('#navigator').append(
                '<div class="islogin"><a href="javascript:logout()">退出</a></div>',
            )
        } else {
            $('#navigator').append(
                '<div class="islogin"><a href="https://account.cnblogs.com/signin">登录</a></div>',
            )
        }

        $(
            '.float-btn li,#blog_nav_newpost,.diggit,#btn_comment_submit',
        ).addClass('mdui-ripple')

        $('.nav a').click(function() {
            var w = document.body.clientWidth
            if (w <= 1200) {
                $('#sideBarMain').toggleClass('sidebar-show')
            }
        })
        myscroll()
    })
}

function globalInit() {
    sidePosition()
    others()
}

export default globalInit
