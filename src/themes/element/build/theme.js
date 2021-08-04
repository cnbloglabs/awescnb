import { loadScript } from 'utils/helpers'
import { cookie } from '../libs'

export default () => {
    loadScript(cookie, () => {
        // 初始化主题
        if ($.cookie('theme') == undefined) {
            $.cookie('theme', 'light', {
                expires: 30,
                path: '/',
                // domain: 'cnblogs.com',
            })
            console.log(123)
        }

        if ($.cookie('theme') == 'dark') {
            //$('.theme').addClass('theme-dark');
            document.documentElement.setAttribute('theme', 'dark')
        }

        // 切换主题
        function changeTheme() {
            if ($.cookie('theme') == 'light') {
                $.cookie('theme', 'dark', {
                    expires: 30,
                    path: '/',
                    // domain: 'cnblogs.com',
                })
                document.documentElement.setAttribute('theme', 'dark')
            } else {
                $.cookie('theme', 'light', {
                    expires: 30,
                    path: '/',
                    // domain: 'cnblogs.com',
                })
                document.documentElement.removeAttribute('theme', 'dark')
            }
        }

        $('.theme').click(function() {
            changeTheme()
        })
    })
}
