function getUserinfo() {
    console.log('fn run')
    // $(document).ajaxComplete(function(event, xhr, option) {
    //     console.log('any ajax complete', event, xhr, option)
    //     if (option.url.indexOf('userinfo') > -1) {
    //         console.log('get userinfo', event, xhr, option)
    //     }
    // })

    $(document).ajaxSuccess((event, xhr, option) => {
        console.log(event, xhr, option)
    })
}

export { getUserinfo }
