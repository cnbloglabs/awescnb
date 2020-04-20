function fancybox() {
    // fancybox
    $('.cnblogs-markdown img').each(function() {
        var element = document.createElement('a')
        $(element).attr('data-fancybox', 'gallery')
        $(element).attr('href', $(this).attr('src'))
        $(this).wrap(element)
    })
}

export default fancybox
