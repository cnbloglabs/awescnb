function getUserinfo() {
    console.log('fn run')
    $(document).ajaxComplete(function(event, xhr, option) {
        if (option.url.indexOf('userinfo') > -1) {
            console.log('get userinfo', event, xhr, option)
        }
    })
}

export { getUserinfo }
