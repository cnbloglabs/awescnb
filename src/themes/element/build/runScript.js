export default () => {
    // 运行脚本
    $('code.language-runCode').each(function() {
        window.eval($(this).text())
        $(this)
            .parent('pre')
            .remove()
    })
}
