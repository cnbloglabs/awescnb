export default () => {
    if (window.isLogined) {
        $('#navigator').append(
            '<div class="islogin"><a href="javascript:logout()">退出</a></div>',
        )
    } else {
        $('#navigator').append(
            '<div class="islogin"><a href="https://account.cnblogs.com/signin">登录</a></div>',
        )
    }
}
