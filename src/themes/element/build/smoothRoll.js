export default () => {
    // 平滑滚动控制
    window.myscroll = function() {
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

    window.myscroll()
}
